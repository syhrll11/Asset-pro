import API from "../_api";

export const login = async (credentials) => {
  const { data } = await API.post("/login", credentials);
  if (data.token) {
    localStorage.setItem("authToken", data.token);
    localStorage.setItem("token", data.token);
  }
  return data;
};

export const logout = async () => {
  const token = localStorage.getItem("authToken") || localStorage.getItem("token");
  if (!token) throw new Error("Tidak ada token untuk logout");

  await API.post("/logout", null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  localStorage.removeItem("authToken");
  localStorage.removeItem("token");
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("user");
  localStorage.removeItem("role");
};
