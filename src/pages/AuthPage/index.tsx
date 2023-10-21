import { Outlet } from "react-router-dom";

const AuthPage: React.FC = () => {
  return (
    
      <div className="lg:flex min-h-screen">
        {/* Left side for large screens */}
        <aside className="hidden lg:block w-2/4 bg-orange-400">
          <div>
          
          </div>
        </aside>

        {/* Right side */}
        <div className="w-full lg:w-3/4">
          <Outlet />
        </div>
      </div>
  );
};

export default AuthPage;
