import { useSidebar } from "@/contexts/SidebarContext";
import { MenuOutlined } from "@ant-design/icons";
import BreadcrumbsTrail from "../breadcrumb";

const Header = () => {
  const { isOpen, toggle } = useSidebar();

  return (
    <header className="bg-white px-8 py-4 shadow">
      <div className="h-7 flex items-center gap-8">
        {!isOpen && <MenuOutlined onClick={toggle} style={{ fontSize: 18 }} />}
        <BreadcrumbsTrail />
      </div>
    </header>
  );
};

export default Header;
