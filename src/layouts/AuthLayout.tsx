import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
