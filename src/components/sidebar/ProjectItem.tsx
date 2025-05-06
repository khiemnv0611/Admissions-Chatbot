import { Popover, Tooltip } from "antd";
import { memo, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { TbTrash } from "react-icons/tb";
import { TfiMoreAlt } from "react-icons/tfi";

type ProjectItemProps = {
  project: string;
};

const ProjectItem = ({ project }: ProjectItemProps) => {
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
      <div className="group button-hover" key={project}>
        <div className="text-clip-nowrap">
          <Tooltip placement="right" title={project}>
            {project}
          </Tooltip>
        </div>
        <div
          className="cursor-pointer hidden group-hover:block"
          onClick={() => setShowPopoverProject((prev) => !prev)}
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
