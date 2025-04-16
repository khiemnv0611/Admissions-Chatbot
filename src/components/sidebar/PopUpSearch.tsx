import { Modal } from "antd";

const PopUpSearch = () => {
  return (
    <Modal
      title="Modal responsive width"
      centered
      // open={openResponsive}
      // onOk={() => setOpenResponsive(false)}
      // onCancel={() => setOpenResponsive(false)}
      width={{
        xs: "90%",
        sm: "80%",
        md: "70%",
        lg: "60%",
        xl: "50%",
        xxl: "40%",
      }}
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>
  );
};

export default PopUpSearch;
