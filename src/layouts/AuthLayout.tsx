import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="page bg-white text-black flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
