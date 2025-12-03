import { lazy } from "react";
import { Route, Routes } from "react-router";

const HomePage = lazy(() => import("@/pages/home"));
const DetailPage = lazy(() => import("@/pages/detail"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/" element={<DetailPage />}></Route>
    </Routes>
  );
};

export default AppRoutes;
