import MainLayout from "@/pages/layouts/main-layout";
import { lazy } from "react";
import { Route, Routes } from "react-router";

const HomePage = lazy(() => import("@/pages/home"));
const DetailPage = lazy(() => import("@/pages/detail"));

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/pokemon/:slug", element: <DetailPage /> },
];

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
