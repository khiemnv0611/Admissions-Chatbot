import MainContent from "@/components/main/MainContent";
import { useMainView } from "@/contexts/MainViewContext";

const Home = () => {
  const { mode, selectedId } = useMainView();

  return <MainContent mode={mode} selectedId={selectedId} />;
};

export default Home;
