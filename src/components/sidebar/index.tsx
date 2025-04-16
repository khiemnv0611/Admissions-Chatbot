import { useSidebar } from "@/contexts/SidebarContext";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import Logo from "@/assets/images/logo.png";
import { Typography } from "antd";
import { useBreakpointMatch } from "@/hooks/useBreakpointMatch";
import { useState } from "react";
import PopUpSearch from "./PopUpSearch";

const Sidebar = () => {
  const { isOpen, toggle } = useSidebar();
  const isLargeScreen = useBreakpointMatch("sm");

  const [visibleSearch, setVisibleSearch] = useState(false);

  const asideClass = isLargeScreen
    ? isOpen
      ? "block static"
      : "hidden static"
    : `fixed top-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`;

  return (
    <>
      {!isLargeScreen && (
        <div
          onClick={toggle}
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        />
      )}

      <aside
        className={`
          z-50 min-h-full w-64 bg-gray-50 border-r p-4 flex flex-col gap-4 transition-all duration-300
          ${asideClass}
        `}
      >
        <div className="h-7 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-8" />
            <Typography.Title
              level={5}
              className="uppercase !text-main-red !mb-0"
            >
              Tuyển sinh
            </Typography.Title>
          </div>
          <div className="flex items-center gap-2">
            <div className="icon-hover" onClick={() => setVisibleSearch(true)}>
              <SearchOutlined style={{ fontSize: 18 }} />
            </div>
            <div className="icon-hover" onClick={toggle}>
              <MenuOutlined style={{ fontSize: 18 }} />
            </div>
          </div>
        </div>
        <div className="mt-8">Sidebar Menu</div>
      </aside>

      <PopUpSearch />
    </>
  );
};

export default Sidebar;
