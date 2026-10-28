# AssetPro frontend

## Deploy demo frontend-only ke Vercel

Frontend dapat di-deploy tanpa menjalankan Laravel. Mode demo (termasuk tombol role pada login dan data simulasi) aktif secara default, jadi tidak perlu environment variable khusus. Di pengaturan proyek Vercel:

1. Set **Root Directory** ke `frontend`.
2. Gunakan **Build Command** `npm run build` dan **Output Directory** `dist`.

Jika `VITE_DEMO_MODE` sebelumnya disetel ke `false` di Vercel, hapus atau ubah nilainya lalu deploy ulang. Pengaturan environment variable Vite dibaca saat proses build.

Untuk menjalankan demo secara lokal, gunakan `npm run dev`. Mode demo development sudah diaktifkan melalui `.env.development`; jika server Vite sudah berjalan, hentikan dan jalankan ulang agar konfigurasi terbaca.

Mode demo menyediakan login lokal dan data contoh untuk tampilan aplikasi. Pilih Admin, Manager, atau User di halaman login untuk mengisi akun; password demo adalah `demo1234`. Data dan perubahan hanya berada di memori browser, tidak disimpan permanen, dan bukan autentikasi yang aman untuk produksi.

Untuk memakai backend sungguhan, set `VITE_DEMO_MODE=false` dan `VITE_API_BASE_URL` ke URL publik API Laravel (contoh: `https://api.example.com/api`). Backend tetap harus berjalan dan mengizinkan request dari domain Vercel melalui CORS. URL localhost hanya dapat digunakan saat frontend dan backend berjalan di mesin pengembang yang sama.
