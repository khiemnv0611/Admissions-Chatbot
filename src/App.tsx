import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
