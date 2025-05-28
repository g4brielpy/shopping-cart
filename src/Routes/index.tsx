import { createBrowserRouter } from "react-router";

import HomePage from "../HomePage";
import CartPage from "../CartPage";
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
