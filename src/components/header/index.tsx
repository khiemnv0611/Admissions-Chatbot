import { useSidebar } from "@/contexts/SidebarContext";
import { MenuOutlined } from "@ant-design/icons";
import BreadcrumbsTrail from "../breadcrumb";
import { SlideLeft } from "../animation";

const Header = () => {
  const { isOpen, toggle } = useSidebar();

  return (
    <header className="bg-white px-8 py-4 shadow overflow-hidden">
      <SlideLeft>
        <div className="h-7 flex items-center gap-8">
          {!isOpen && (
            <MenuOutlined onClick={toggle} style={{ fontSize: 18 }} />
          )}
          <BreadcrumbsTrail />
        </div>
      </SlideLeft>
    </header>
  );
};

export default Header;
