// mocks/mockChat.ts
export const mockFolders = [
  {
    id: "101",
    name: "Hướng dẫn sử dụng kĩ thuật",
    projects: ["chat-1", "chat-2"], // ID các đoạn chat thuộc folder này
  },
  {
    id: "102",
    name: "Tài liệu kỹ thuật",
    projects: [],
  },
  {
    id: "103",
    name: "Template báo cáo",
    projects: [],
  },
  {
    id: "104",
    name: "Báo cáo tuần",
    projects: ["chat-3"],
  },
];

export const chatList = [
  {
    id: "chat-1",
    title: "Tối ưu Git Flow",
    content: `Đây là một bài toán phổ biến trong quản lý codebase...`,
  },
  {
    id: "chat-2",
    title: "Cập nhật nhánh chung",
    content: `Hiện tại các dự án đang dùng chung 1 source...`,
  },
  {
    id: "chat-3",
    title: "Báo cáo tuần 1",
    content: `Nội dung báo cáo tuần số 1...`,
  },
];
