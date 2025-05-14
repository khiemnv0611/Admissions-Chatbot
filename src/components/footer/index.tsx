import { SlideUp } from "../animation";

const Footer = () => (
  <footer className="bg-gray-100 px-4 py-1 border-t text-center overflow-hidden">
    <SlideUp>
      <div className="flex justify-between items-center">
        <span>@2025</span>
        <span>MinhPhong ngu</span>
      </div>
    </SlideUp>
  </footer>
);
export default Footer;
