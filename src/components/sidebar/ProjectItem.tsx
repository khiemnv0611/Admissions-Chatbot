import { Popover, Tooltip } from "antd";
import { memo, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { TbTrash } from "react-icons/tb";
import { TfiMoreAlt } from "react-icons/tfi";
import { ProjectData } from "./folder/FolderItem";
import { useNavigate } from "react-router-dom";

type ProjectItemProps = {
  project: ProjectData;
};

const ProjectItem = ({ project }: ProjectItemProps) => {
  const navigate = useNavigate();
  const [showPopoverProject, setShowPopoverProject] = useState(false);

  const content = (
    <div className="flex flex-col gap-2">
      <button onClick={() => {}} className="text-blue-500 button-hover">
        <EditOutlined />
        Đổi tên
      </button>
      <button onClick={() => {}} className="text-red-500 button-hover">
        <TbTrash size={18} />
        Xoá
      </button>
    </div>
  );

  return (
    <div className="flex items-center">
      <div
        className="group button-hover"
        key={project.id}
        onClick={() => navigate(`/chat/${project.id}`)}
      >
        <div className="text-clip-nowrap">
          <Tooltip placement="right" title={project.name}>
            {project.name}
          </Tooltip>
        </div>
        <div
          className="cursor-pointer hidden group-hover:block"
          onClick={(e) => {
            e.stopPropagation();
            setShowPopoverProject((prev) => !prev);
          }}
        >
          <TfiMoreAlt />
        </div>
      </div>
      {showPopoverProject && (
        <Popover
          content={content}
          trigger="click"
          placement="right"
          open={showPopoverProject}
          onOpenChange={setShowPopoverProject}
        >
          <div></div>
        </Popover>
      )}
    </div>
  );
};

export default memo(ProjectItem);
