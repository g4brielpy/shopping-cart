import { Outlet } from "react-router";

import { HeaderPage } from "../components/HeaderPage";
import { FooterPage } from "../components/FooterPage";

export default function LayoutRoot() {
  return (
    <div className="bg-dark-bg min-h-dvh text-primary-text">
      <HeaderPage />
      <Outlet />
      <FooterPage />
    </div>
  );
}
