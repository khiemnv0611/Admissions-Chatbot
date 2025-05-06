import MainContent from "@/components/main/MainContent";
import { useMainView } from "@/contexts/MainViewContext";

const Home = () => {
  const { mode, selectedId } = useMainView();

  return (
    <div className="p-4 overflow-hidden">
      <MainContent mode={mode} selectedId={selectedId} />
    </div>
  );
};

export default Home;
