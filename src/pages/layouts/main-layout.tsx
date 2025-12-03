import Header from "@/components/header";
import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="p-4 border-x border-secondary container mx-auto min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
