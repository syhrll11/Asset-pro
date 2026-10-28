import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import PrivateRoute from "./components/PrivateRoute";

import Dashboard from "./page/Dashboard";
import MainGudang from "./page/MainGudang";
import TambahGudang from "./page/TambahGudang";
import Aset from "./page/aset/Aset";
import Login from "./page/Login";
import LandingPage from "./page/LandingPage";
import AdminPeminjam from "./page/admin/peminjams";
import PeminjamCreate from "./page/admin/peminjams/create";
import PeminjamEdit from "./page/admin/peminjams/edit";
import KategoriAset from "./page/kategori_aset/KategoriAset";
import TambahKategoriAset from "./page/kategori_aset/TambahKategoriAset";
import EditKategoriAset from "./page/kategori_aset/EditKategoriAset";
import AdminPegawai from "./page/pegawai/index";
import PegawaiCreate from "./page/pegawai/create";
import PegawaiEdit from "./page/pegawai/edit";
import Laporan from "./page/laporan";
import AsetKeluar from "./page/admin/aset-keluar";
import AsetMasuk from "./page/admin/aset-masuk";
import Pinjam from "./page/admin/aset-masuk/pinjam";

import "./App.css";

const App = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const noLayoutPaths = ["/", "/login"];
  const isNoLayout = noLayoutPaths.includes(location.pathname);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  return (
    <>
      {isNoLayout ? (
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      ) : (
        <div className="flex h-screen h-[100dvh] w-full max-w-full bg-slate-50 overflow-hidden font-sans">
          {isSidebarOpen && (
            <button
              type="button"
              aria-label="Tutup menu navigasi"
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 z-40 bg-slate-900/40 md:hidden"
            />
          )}
          <Sidebar
            isOpen={isSidebarOpen}
            onNavigate={() => setIsSidebarOpen(false)}
          />
          <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
            <Topbar
              onMenuClick={() => setIsSidebarOpen(true)}
              isMenuOpen={isSidebarOpen}
            />
            <main className="flex-1 min-w-0 overflow-y-auto overflow-x-hidden p-3 sm:p-5 lg:p-6 bg-slate-50">
              <Routes key={location.pathname} location={location}>
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/gudang" element={<PrivateRoute><MainGudang /></PrivateRoute>} />
                <Route path="/tambah-gudang" element={<PrivateRoute><TambahGudang /></PrivateRoute>} />
                <Route path="/edit-gudang/:id" element={<PrivateRoute><TambahGudang /></PrivateRoute>} />

                <Route path="/aset" element={<PrivateRoute><Aset /></PrivateRoute>} />

                <Route path="/peminjams" element={<PrivateRoute><AdminPeminjam /></PrivateRoute>} />
                <Route path="/peminjams/create" element={<PrivateRoute><PeminjamCreate /></PrivateRoute>} />
                <Route path="/peminjams/:id/edit" element={<PrivateRoute><PeminjamEdit /></PrivateRoute>} />

                <Route path="/kategori-aset" element={<PrivateRoute><KategoriAset /></PrivateRoute>} />
                <Route path="/kategori-aset/tambah" element={<PrivateRoute><TambahKategoriAset /></PrivateRoute>} />
                <Route path="/kategori-aset/edit/:id" element={<PrivateRoute><EditKategoriAset /></PrivateRoute>} />

                <Route path="/pegawai" element={<PrivateRoute><AdminPegawai /></PrivateRoute>} />
                <Route path="/pegawai/create" element={<PrivateRoute><PegawaiCreate /></PrivateRoute>} />
                <Route path="/pegawai/:id/edit" element={<PrivateRoute><PegawaiEdit /></PrivateRoute>} />

                <Route path="/laporan" element={<PrivateRoute><Laporan /></PrivateRoute>} />

                {/* Transaksi Aset */}
                <Route path="/aset-keluar" element={<PrivateRoute><AsetKeluar /></PrivateRoute>} />
                <Route path="/aset-masuk" element={<PrivateRoute><AsetMasuk /></PrivateRoute>} />
                <Route path="/aset-masuk/pinjam/:id" element={<PrivateRoute><Pinjam /></PrivateRoute>} />
              </Routes>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
