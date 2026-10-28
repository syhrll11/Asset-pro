const demoAccounts = [
  {
    email: "admin@demo.assetpro.local",
    password: "demo1234",
    user: {
      id_user: 1,
      nama_karyawan: "Demo Admin",
      email_karyawan: "admin@demo.assetpro.local",
      role: "admin",
    },
  },
  {
    email: "manager@demo.assetpro.local",
    password: "demo1234",
    user: {
      id_user: 2,
      nama_karyawan: "Demo Manager",
      email_karyawan: "manager@demo.assetpro.local",
      role: "manager",
    },
  },
  {
    email: "user@demo.assetpro.local",
    password: "demo1234",
    user: {
      id_user: 3,
      nama_karyawan: "Demo User",
      email_karyawan: "user@demo.assetpro.local",
      role: "user",
    },
  },
];

const demoData = {
  assets: [
    { id_asets: 1, kd_gudang: "GD01", name_asets: "Laptop Lenovo", spec: "Core i5, 8GB RAM, 512GB SSD", tipe_aset: "Elektronik", harga: 10000000, serial_number: "DEMO-LEN-001", inout_aset: "in", tanggal_perolehan: "2023-05-10", id_kat_aset: 1, id_user: 1 },
    { id_asets: 2, kd_gudang: "GD02", name_asets: "Meja Kantor", spec: "Kayu jati, ukuran 120x60 cm", tipe_aset: "Furniture", harga: 1500000, serial_number: "DEMO-FUR-002", inout_aset: "in", tanggal_perolehan: "2022-08-15", id_kat_aset: 2, id_user: 2 },
    { id_asets: 3, kd_gudang: "GD03", name_asets: "Mobil Pickup", spec: "Kendaraan operasional", tipe_aset: "Kendaraan", harga: 135000000, serial_number: "DEMO-VEH-003", inout_aset: "out", tanggal_perolehan: "2021-12-01", id_kat_aset: 3, id_user: 3 },
    { id_asets: 4, kd_gudang: "GD01", name_asets: "Printer Epson", spec: "Ink Tank", tipe_aset: "Elektronik", harga: 2300000, serial_number: "DEMO-PRT-004", inout_aset: "service", tanggal_perolehan: "2023-01-20", id_kat_aset: 1, id_user: 1 },
    { id_asets: 5, kd_gudang: "GD05", name_asets: "Lemari Arsip", spec: "Besi, 4 rak", tipe_aset: "Furniture", harga: 2000000, serial_number: "DEMO-LEM-005", inout_aset: "in", tanggal_perolehan: "2024-03-11", id_kat_aset: 2, id_user: 2 },
  ],
  categories: [
    { id_kat_aset: 1, kat_aset: "Elektronik" },
    { id_kat_aset: 2, kat_aset: "Furniture" },
    { id_kat_aset: 3, kat_aset: "Kendaraan" },
    { id_kat_aset: 4, kat_aset: "Peralatan Kantor" },
  ],
  warehouses: [
    { id_gudang: 1, kd_gudang: "GD01", nama_gudang: "Gudang Utama", alamat_gudang: "Jl. Raya Merdeka No. 1", koordinat: "-6.200000,106.816666" },
    { id_gudang: 2, kd_gudang: "GD02", nama_gudang: "Gudang Barat", alamat_gudang: "Jl. Kemerdekaan Barat No. 10", koordinat: "-6.210000,106.826666" },
    { id_gudang: 3, kd_gudang: "GD03", nama_gudang: "Gudang Timur", alamat_gudang: "Jl. Timur Laut No. 5", koordinat: "-6.190000,106.836666" },
    { id_gudang: 4, kd_gudang: "GD04", nama_gudang: "Gudang Selatan", alamat_gudang: "Jl. Selatan Indah No. 9", koordinat: "-6.195000,106.820000" },
    { id_gudang: 5, kd_gudang: "GD05", nama_gudang: "Gudang Cadangan", alamat_gudang: "Jl. Persediaan No. 12", koordinat: "-6.185000,106.810000" },
  ],
  users: demoAccounts.map(({ user }) => user),
  borrowers: [
    { id_peminjam: 1, nik_karyawan: "100001", nama_karyawan: "Andi Prasetyo", kd_gudang: "GD01" },
    { id_peminjam: 2, nik_karyawan: "100002", nama_karyawan: "Budi Santoso", kd_gudang: "GD02" },
    { id_peminjam: 3, nik_karyawan: "100003", nama_karyawan: "Citra Dewi", kd_gudang: "GD03" },
    { id_peminjam: 4, nik_karyawan: "100004", nama_karyawan: "Dedi Gunawan", kd_gudang: "GD01" },
    { id_peminjam: 5, nik_karyawan: "100005", nama_karyawan: "Eka Lestari", kd_gudang: "GD02" },
  ],
  transactions: [
    { id_trx: 1, kd_cabang: "CBG001", name_asset: "Laptop Lenovo", tipe_asset: "Elektronik", serial_number: "DEMO-LEN-001", trx_status: "out", kd_aktiva: "DEMO-1001", lokasi: "Ruang IT", tanggal_keluar: "2024-06-01 08:00:00", tanggal_kembali: null, id_peminjam: 1, id_asets: 1 },
    { id_trx: 2, kd_cabang: "CBG002", name_asset: "Printer Epson", tipe_asset: "Elektronik", serial_number: "DEMO-PRT-004", trx_status: "service", kd_aktiva: "DEMO-2002", lokasi: "Service Center", tanggal_keluar: "2024-05-15 09:30:00", tanggal_kembali: null, id_peminjam: 2, id_asets: 4 },
    { id_trx: 3, kd_cabang: "CBG003", name_asset: "Mobil Pickup", tipe_asset: "Kendaraan", serial_number: "DEMO-VEH-003", trx_status: "out", kd_aktiva: "DEMO-3003", lokasi: "Lapangan Gudang", tanggal_keluar: "2024-04-10 07:00:00", tanggal_kembali: "2024-04-11 18:00:00", id_peminjam: 3, id_asets: 3 },
    { id_trx: 4, kd_cabang: "CBG004", name_asset: "Lemari Arsip", tipe_asset: "Furniture", serial_number: "DEMO-LEM-005", trx_status: "BAP", kd_aktiva: "DEMO-4004", lokasi: "Ruang Administrasi", tanggal_keluar: "2024-03-20 13:00:00", tanggal_kembali: "2024-03-25 09:00:00", id_peminjam: 4, id_asets: 5 },
  ],
};

const dashboardData = {
  total_aset: 5,
  status_aset: { in: 3, out: 1, service: 1, BAP: 0 },
  proporsi_dipinjam: { dipinjam: 1, tersedia: 4 },
  kerusakan_per_kategori: [
    { kategori: "Elektronik", jumlah: 1 },
    { kategori: "Furniture", jumlah: 0 },
    { kategori: "Kendaraan", jumlah: 0 },
  ],
  tren_bulanan: [
    { bulan: "Jan", rusak: 1 },
    { bulan: "Feb", rusak: 2 },
    { bulan: "Mar", rusak: 1 },
    { bulan: "Apr", rusak: 3 },
    { bulan: "Mei", rusak: 2 },
    { bulan: "Jun", rusak: 1 },
  ],
};

const collections = {
  "/assets": ["assets", "id_asets"],
  "/kategori-aset": ["categories", "id_kat_aset"],
  "/gudang": ["warehouses", "id_gudang"],
  "/users": ["users", "id_user"],
  "/peminjam": ["borrowers", "id_peminjam"],
  "/aset-in": ["transactions", "id_trx"],
  "/aset-masuk": ["transactions", "id_trx"],
  "/aset-out": ["transactions", "id_trx"],
};

const getRequestData = (config) => {
  if (!config.data) return {};
  if (typeof config.data === "string") {
    try {
      return JSON.parse(config.data);
    } catch {
      throw createError("Request demo tidak valid.", config);
    }
  }
  if (config.data instanceof FormData) {
    return Object.fromEntries(config.data.entries());
  }
  return config.data;
};

const createError = (message, config, status = 400) =>
  Object.assign(new Error(message), {
    config,
    response: { status, data: { message }, config },
  });

export const demoAdapter = async (config) => {
  const baseURL = config.baseURL
    ? `${config.baseURL.replace(/\/+$/, "")}/`
    : `${window.location.origin}/`;
  const url = new URL(config.url, baseURL);
  const path = url.pathname.replace(/\/api\/?/, "/").replace(/\/+$/, "") || "/";
  const method = (config.method || "get").toLowerCase();
  const payload = getRequestData(config);
  let data;

  if (path === "/login" && method === "post") {
    const account = demoAccounts.find(
      ({ email, password }) => email === payload.email_karyawan && password === payload.password_user
    );
    if (!account) throw createError("Akun demo tidak valid.", config, 401);
    data = { token: "demo-session", user: account.user };
  } else if (path === "/logout" && method === "post") {
    data = { message: "Logout demo berhasil." };
  } else if (path === "/dashboard" && method === "get") {
    data = dashboardData;
  } else {
    const match = path.match(/^(\/[^/]+)(?:\/([^/]+))?$/);
    const collection = match && collections[match[1]];
    if (!collection) {
      throw createError(`Endpoint demo belum tersedia: ${method.toUpperCase()} ${path}`, config, 404);
    }

    const [stateKey, idKey] = collection;
    const rows = demoData[stateKey];
    const id = match[2];

    if (method === "get") {
      if (!id) {
        const result = match[1] === "/aset-out"
          ? rows.filter((item) => item.trx_status === (url.searchParams.get("status") || "out"))
          : rows;
        data = ["/users", "/peminjam"].includes(match[1]) ? { data: result } : result;
      } else {
        const row = rows.find((item) => String(item[idKey]) === id);
        if (!row) throw createError("Data demo tidak ditemukan.", config, 404);
        data = ["/aset-masuk", "/users", "/peminjam", "/gudang"].includes(match[1])
          ? { data: row }
          : row;
      }
    } else if (method === "post" && !id) {
      if (match[1] === "/aset-out" && payload.id_trx) {
        const transaction = rows.find((item) => String(item.id_trx) === String(payload.id_trx));
        if (!transaction) throw createError("Transaksi demo tidak ditemukan.", config, 404);
        transaction.trx_status = "in";
        transaction.tanggal_kembali = new Date().toISOString();
        data = { message: "Pengembalian simulasi berhasil.", data: transaction };
      } else {
        const newRow = {
          ...payload,
          [idKey]: Math.max(0, ...rows.map((item) => Number(item[idKey]) || 0)) + 1,
        };
        rows.push(newRow);
        data = { message: "Data simulasi berhasil ditambahkan.", data: newRow };
      }
    } else if (method === "post" && id && payload._method === "PUT") {
      const index = rows.findIndex((item) => String(item[idKey]) === id);
      if (index < 0) throw createError("Data demo tidak ditemukan.", config, 404);
      const { _method, ...updates } = payload;
      rows[index] = { ...rows[index], ...updates };
      data = { message: "Data simulasi berhasil diperbarui.", data: rows[index] };
    } else if (method === "post" && id) {
      throw createError(`Operasi demo belum tersedia: ${method.toUpperCase()} ${path}`, config);
    } else if (method === "put" && id) {
      const index = rows.findIndex((item) => String(item[idKey]) === id);
      if (index < 0) throw createError("Data demo tidak ditemukan.", config, 404);
      rows[index] = { ...rows[index], ...payload };
      data = { message: "Data simulasi berhasil diperbarui.", data: rows[index] };
    } else if (method === "delete" && id) {
      const index = rows.findIndex((item) => String(item[idKey]) === id);
      if (index >= 0) rows.splice(index, 1);
      data = { message: "Data simulasi berhasil dihapus." };
    } else {
      throw createError(`Operasi demo belum tersedia: ${method.toUpperCase()} ${path}`, config);
    }
  }

  return {
    data,
    status: 200,
    statusText: "OK",
    headers: {},
    config,
  };
};
