import { Outlet } from "react-router";
import { HeaderPage } from "../components/HeaderPage";

export default function LayoutRoot() {
  return (
    <div className="bg-dark-bg min-h-dvh text-primary-text">
      <HeaderPage />
      <Outlet />
    </div>
  );
}
