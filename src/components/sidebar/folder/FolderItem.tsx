import { memo, useState } from "react";
import { FolderOpenOutlined } from "@ant-design/icons";
import { Tooltip, Popover } from "antd";
import { TfiMoreAlt } from "react-icons/tfi";
import { TbTrash } from "react-icons/tb";
import ProjectItem from "../ProjectItem";
import { useNavigate } from "react-router-dom";

export interface ProjectData {
  id: string;
  name: string;
}

export interface FolderData {
  id: string;
  name: string;
  projects: ProjectData[];
}

interface FolderItemProps {
  data: FolderData;
  isOpen: boolean;
  onToggle: () => void;
  icon?: React.ReactNode;
}

const FolderItem = ({ data, isOpen, onToggle, icon }: FolderItemProps) => {
  const navigate = useNavigate();
  const { name, projects } = data;
  const renderIcon = icon ?? <FolderOpenOutlined />;

  const [showPopoverFolder, setShowPopoverFolder] = useState(false);

  const content = (
    <button
      onClick={() => {}}
      className="text-red-500 hover:text-red-700 flex gap-2 items-center"
    >
      <TbTrash size={18} />
      Xoá thư mục
    </button>
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center">
        <div
          className="group button-hover !p-1"
          onClick={() => navigate(`/folder/${data.id}`)}
        >
          <div className="text-clip-nowrap">
            <div
              className="icon-hover"
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
            >
              <Tooltip placement="top" title="Danh sách chat">
                {renderIcon}
              </Tooltip>
            </div>
            <Tooltip placement="right" title={name}>
              {name}
            </Tooltip>
          </div>
          <div
            className="cursor-pointer hidden group-hover:block"
            onClick={(e) => {
              e.stopPropagation();
              setShowPopoverFolder((prev) => !prev);
            }}
          >
            <TfiMoreAlt />
          </div>
        </div>

        {showPopoverFolder && (
          <Popover
            content={content}
            trigger="click"
            placement="right"
            open={showPopoverFolder}
            onOpenChange={setShowPopoverFolder}
          >
            <div></div>
          </Popover>
        )}
      </div>

      {isOpen && projects.length > 0 && (
        <div className="ml-6 flex flex-col gap-2">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(FolderItem);
