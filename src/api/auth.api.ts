import axiosClient from "./axiosClient";

export const authApi = {
  login: async (
    email: string,
    password: string
  ): Promise<{ token: string }> => {
    const res = await axiosClient.post("/auth/login", { email, password });
    return res.data;
  },
  logout: () => {
    localStorage.removeItem("token");
  },
};
