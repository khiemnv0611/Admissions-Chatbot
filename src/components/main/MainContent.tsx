import { chatList, mockFolders } from "@/mocks/mockChat";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

type Mode = "home" | "folder" | "chat";

interface MainContentProps {
  mode: Mode;
  selectedId?: string;
}

const MainContent = ({ mode, selectedId }: MainContentProps) => {
  if (mode === "home") {
    return <div className="text-center text-xl">Ready when you are.</div>;
  }

  if (mode === "folder") {
    const folder = mockFolders.find((f) => f.id === selectedId);
    if (!folder) return <div>Không tìm thấy thư mục</div>;

    return (
      <div>
        <Title level={3}>{folder.name}</Title>
        {folder.projects.length === 0 ? (
          <Paragraph italic>Không có đoạn chat nào</Paragraph>
        ) : (
          folder.projects.map((chatId) => {
            const chat = chatList.find((c) => c.id === chatId);
            return (
              <div
                key={chat?.id}
                className="border p-4 my-2 rounded bg-gray-50"
              >
                <Title level={5}>{chat?.title}</Title>
                <Paragraph ellipsis={{ rows: 3 }}>{chat?.content}</Paragraph>
              </div>
            );
          })
        )}
      </div>
    );
  }

  if (mode === "chat") {
    const chat = chatList.find((c) => c.id === selectedId);
    if (!chat) return null;

    return (
      <div>
        <Title level={3}>{chat.title}</Title>
        <Paragraph>{chat.content}</Paragraph>
      </div>
    );
  }

  return null;
};

export default MainContent;
