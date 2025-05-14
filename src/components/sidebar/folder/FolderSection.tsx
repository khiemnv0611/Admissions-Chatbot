import { PlusOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

interface Props {
  title: string;
  children?: React.ReactNode;
}

const FolderSection = ({ title, children }: Props) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center group h-6">
        <div className="folder-sidebar-title">{title}</div>
        <Tooltip placement="right" title={`Thêm ${title.toLowerCase()} mới`}>
          <div
            className="icon-hover !h-6 !w-6 !rounded-lg transition-all duration-200
              flex md:!hidden md:group-hover:!flex"
          >
            <PlusOutlined style={{ fontSize: 12 }} />
          </div>
        </Tooltip>
      </div>

      {children}
    </div>
  );
};

export default FolderSection;
