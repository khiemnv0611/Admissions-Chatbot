import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AuthPage from "./pages/auth";
import HomePage from "./pages/home";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import FolderView from "./views/main/FolderView";
import ChatView from "./views/main/ChatView";
import { isAuthenticated } from "./utils/auth";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/auth"
          element={
            <AuthLayout>
              <AuthPage />
            </AuthLayout>
          }
        />
        <Route
          path="/"
          element={
            <Navigate to={isAuthenticated() ? "/home" : "/auth"} replace />
          }
        />
        <Route
          path="*"
          element={
            <Navigate to={isAuthenticated() ? "/home" : "/auth"} replace />
          }
        />

        {/* Main Layout wrapper, only re-renders outlet */}
        <Route element={<MainLayout />}>
          {/* Nested routes to keep the layout intact */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/folder/:folderId" element={<FolderView />} />
          <Route path="/chat/:chatId" element={<ChatView />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
