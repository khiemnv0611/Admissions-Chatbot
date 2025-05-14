import { Typography } from "antd";
import { mockMenu, mockFolder } from "@/mocks";
import { IoChatbubblesOutline } from "react-icons/io5";
import ChatInputBox from "@/components/chat/ChatInputBox";
import { useNavigate, useParams } from "react-router-dom";

const { Title, Paragraph } = Typography;

const FolderView = () => {
  const { folderId } = useParams<{ folderId: string }>();
  const navigate = useNavigate();

  const folder = mockMenu.find((f) => f.id === folderId);
  if (!folder) return <div className="p-4">Không tìm thấy thư mục</div>;

  return (
    <div className="flex flex-col justify-center gap-4 w-[60%]">
      <Title level={3}>{folder.name}</Title>
      <ChatInputBox />

      {folder.projects.length === 0 ? (
        <div className="flex flex-col justify-center items-center gap-2 mt-20">
          <IoChatbubblesOutline size={20} />
          <Paragraph italic>Hãy bắt đầu 1 đoạn chat mới</Paragraph>
        </div>
      ) : (
        <div className="space-y-4 w-full">
          <Paragraph strong className="text-xs mt-6">
            Danh sách chat trong thư mục
          </Paragraph>
          {folder.projects.map((project) => {
            const chat = mockFolder.find((c) => c.id === project.id);
            return (
              <div
                key={project.id}
                className="border rounded p-4 shadow-sm bg-gray-50 hover:shadow-md transition flex items-center gap-4 cursor-pointer"
                onClick={() => navigate(`/chat/${project.id}`)}
              >
                <IoChatbubblesOutline size={20} />
                <div className="text-sm">
                  <div className="font-semibold">{project.name}</div>
                  <div className="line-clamp-1 overflow-hidden text-ellipsis">
                    {chat?.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FolderView;
