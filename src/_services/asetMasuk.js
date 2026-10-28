import api from "../_api"; // axios instance with baseURL and token

export const getAsetMasuk = async () => {
  const res = await api.get("/aset-in");
  return res.data;
};

// ✅ Tambahkan ini:
export const getAsetById = async (id) => {
  const response = await api.get(`/aset-masuk/${id}`);
  return response.data.data;
};

export const deleteAsetMasuk = async (id) => {
  return await api.delete(`/aset-in/${id}`);
};
