import { useParams } from "react-router-dom";
import { Typography } from "antd";
import { mockChat } from "@/mocks";

const { Title, Paragraph } = Typography;

const ChatView = () => {
  const { chatId } = useParams<{ chatId: string }>();
  const chat = mockChat.find((c) => c.id === chatId);

  if (!chat) return <div>Không tìm thấy đoạn chat</div>;

  return (
    <div>
      <Title level={3}>{chat.title}</Title>
      <Paragraph>{chat.content}</Paragraph>
    </div>
  );
};

export default ChatView;
