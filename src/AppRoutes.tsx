import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AuthPage from "./pages/auth";
import HomePage from "./pages/home";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import { isAuthenticated } from "./utils/auth";
import { ReactElement } from "react";

const PrivateRoute = ({ element }: { element: ReactElement }) => {
  return isAuthenticated() ? element : <Navigate to="/auth" replace />;
};

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Redirect root or fallback */}
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

        {/* Auth */}
        <Route
          path="/auth"
          element={
            <AuthLayout>
              <AuthPage />
            </AuthLayout>
          }
        />

        {/* Home */}
        <Route
          path="/home"
          element={
            // <PrivateRoute
            //   element={
            //     <MainLayout>
            //       <HomePage />
            //     </MainLayout>
            //   }
            // />
            <MainLayout>
              <HomePage />
            </MainLayout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
