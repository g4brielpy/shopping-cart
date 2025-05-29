import { createBrowserRouter } from "react-router";

import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import LayoutRoot from "../layouts/LayoutRoot";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "carrinho", element: <CartPage /> },
    ],
  },
]);
