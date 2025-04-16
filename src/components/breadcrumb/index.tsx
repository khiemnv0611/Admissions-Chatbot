import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const BreadcrumbsTrail = () => {
  return (
    <Breadcrumb
      className="text-lg !text-black"
      separator=">"
      items={[
        {
          title: <HomeOutlined style={{ fontSize: 18 }} />,
        },
        {
          title: "Example",
          href: "",
        },
      ]}
    />
  );
};

export default BreadcrumbsTrail;
