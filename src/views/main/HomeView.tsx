import ChatInputBox from "@/components/chat/ChatInputBox";
import Chatbot from "@/assets/images/chatbot.jpg";

const HomeView = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-[60%]">
      <img src={Chatbot} alt="chatbot" className="h-20 w-20" />
      <div className="text-xl">
        Bạn có thắc mắc gì về việc tuyển sinh của TDTU không?
      </div>
      <ChatInputBox />
    </div>
  );
};

export default HomeView;
