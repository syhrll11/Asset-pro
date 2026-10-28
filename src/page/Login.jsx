import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import API from '../_api';
import {
  HiOutlineCube,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineExclamationCircle,
  HiOutlineArrowLeft,
} from 'react-icons/hi2';

const Login = () => {
  const [email_karyawan, setEmail] = useState('');
  const [password_user, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const isDemoMode = import.meta.env.VITE_DEMO_MODE !== 'false';
  const demoAccounts = [
    { role: 'Admin', email: 'admin@demo.assetpro.local' },
    { role: 'Manager', email: 'manager@demo.assetpro.local' },
    { role: 'User', email: 'user@demo.assetpro.local' },
  ];

  const fillDemoAccount = (email) => {
    setEmail(email);
    setPassword('demo1234');
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const { data } = await API.post('/login', { email_karyawan, password_user });

      if (!data.token) {
        throw new Error(data.message || 'Login gagal, periksa kredensial Anda');
      }

      // Simpan data ke localStorage (tetap sama persis)
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('token', data.token);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('role', data.user.role);

      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Terjadi kesalahan saat login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="w-full max-w-[420px]">
        {/* Tombol kembali ke landing page */}
        <div className="mb-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-800 transition-colors"
          >
            <HiOutlineArrowLeft className="w-3.5 h-3.5" />
            Kembali ke Beranda
          </Link>
        </div>

        {/* Card Login */}
        <div className="bg-white border border-slate-200/90 rounded-xl p-8 shadow-card">
          {/* Header Card */}
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-3 shadow-sm">
              <HiOutlineCube className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold font-display text-slate-900 tracking-tight">
              AssetPro System
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Peminjaman, Perbaikan & Pengembalian Aset
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                <HiOutlineExclamationCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Alamat Email
              </label>
              <input
                type="email"
                placeholder="nama@perusahaan.com"
                value={email_karyawan}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-colors"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-xs font-semibold text-slate-700">
                  Kata Sandi
                </label>
                <a
                  href="/forgot-password"
                  className="text-xs text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Lupa Password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Masukkan kata sandi"
                  value={password_user}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 pr-10 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                  aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                >
                  {showPassword ? (
                    <HiOutlineEyeSlash className="w-4 h-4" />
                  ) : (
                    <HiOutlineEye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-70 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            >
              {isLoading ? 'Memverifikasi...' : 'Masuk ke Sistem'}
            </button>
          </form>

          {isDemoMode && (
            <div className="mt-5 rounded-lg border border-blue-100 bg-blue-50/70 p-3">
              <p className="text-xs font-semibold text-slate-700">Pilih akun demo untuk mengisi login</p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {demoAccounts.map((account) => (
                  <button
                    key={account.role}
                    type="button"
                    onClick={() => fillDemoAccount(account.email)}
                    className="rounded-md border border-blue-200 bg-white px-2 py-2 text-xs font-semibold text-blue-700 transition-colors hover:bg-blue-100"
                  >
                    {account.role}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-[11px] text-slate-500">
                Password demo: <span className="font-semibold">demo1234</span>. Data hanya simulasi di browser.
              </p>
            </div>
          )}

          <div className="mt-6 pt-5 border-t border-slate-100 text-center">
            <p className="text-[11px] text-slate-400">
              {isDemoMode
                ? 'Mode demo aktif. Perubahan data tidak tersimpan ke server.'
                : 'Gunakan akun resmi internal yang terdaftar pada sistem SIMAO.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
