import axiosClient from "./axiosClient";

export const folderApi = {
  paginateFolders: async (page: number, size: number) => {
    const res = await axiosClient.get("/folders", {
      params: { page, size },
    });
    if (res.data.Code !== 1)
      throw new Error(res.data.Message || "Failed to load folders");
    return res.data.Data;
  },

  createFolder: async (name: string) => {
    const res = await axiosClient.post("/folders", { name });
    return res.data;
  },

  deleteFolder: async (id: string) => {
    const res = await axiosClient.delete(`/folders/${id}`);
    return res.data;
  },

  renameFolder: async (id: string, name: string) => {
    const res = await axiosClient.patch(`/folders/${id}/rename`, { name });
    return res.data;
  },
};
