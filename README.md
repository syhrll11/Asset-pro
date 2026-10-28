# AssetPro frontend

## Deploy demo frontend-only ke Vercel

Frontend dapat di-deploy tanpa menjalankan Laravel. Build frontend selalu menggunakan mode demo, sehingga tombol role dan data simulasi tersedia di lokal maupun Vercel tanpa environment variable.

1. Set **Root Directory** ke `frontend`.
2. Gunakan **Build Command** `npm run build` dan **Output Directory** `dist`.

Untuk menjalankan demo secara lokal, gunakan `npm run dev`. Mode demo development sudah diaktifkan melalui `.env.development`; jika server Vite sudah berjalan, hentikan dan jalankan ulang agar konfigurasi terbaca.

Mode demo menyediakan login lokal dan data contoh untuk tampilan aplikasi. Pilih Admin, Manager, atau User di halaman login untuk mengisi akun; password demo adalah `demo1234`. Data dan perubahan hanya berada di memori browser, tidak disimpan permanen, dan bukan autentikasi yang aman untuk produksi.

Mode ini khusus demo frontend-only. Data dan perubahan hanya berada di memori browser, tidak disimpan permanen, dan bukan autentikasi yang aman untuk produksi.
