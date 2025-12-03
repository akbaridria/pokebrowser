import Header from "@/components/header";
import { Outlet } from "react-router";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="p-4 border-x border-secondary container mx-auto min-h-screen">
        <NuqsAdapter>
          <Outlet />
        </NuqsAdapter>
      </div>
    </div>
  );
};

export default MainLayout;
