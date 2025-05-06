import { createContext, useContext, useState, ReactNode } from "react";

type Mode = "home" | "folder" | "chat";

interface MainViewContextType {
  mode: Mode;
  selectedId?: string;
  setMainView: (mode: Mode, id?: string) => void;
}

const MainViewContext = createContext<MainViewContextType | undefined>(
  undefined
);

export const MainViewProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>("home");
  const [selectedId, setSelectedId] = useState<string>();

  const setMainView = (mode: Mode, id?: string) => {
    setMode(mode);
    setSelectedId(id);
  };

  return (
    <MainViewContext.Provider value={{ mode, selectedId, setMainView }}>
      {children}
    </MainViewContext.Provider>
  );
};

export const useMainView = () => {
  const context = useContext(MainViewContext);
  if (!context) {
    throw new Error("useMainView must be used within a MainViewProvider");
  }
  return context;
};
