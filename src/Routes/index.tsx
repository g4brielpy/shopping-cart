import { createBrowserRouter } from "react-router";

import HomePage from "../HomePage";
import CartPage from "../CartPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/carrinho",
    element: <CartPage />,
  },
]);
