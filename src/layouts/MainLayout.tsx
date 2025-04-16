import { ReactNode } from "react";
import { SidebarProvider } from "@/contexts/SidebarContext";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex bg-white text-black">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-4">{children}</main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
