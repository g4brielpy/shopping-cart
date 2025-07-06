import { RouterProvider } from "react-router";
import { Router } from "./Routes";

import { ProductsProvider } from "./contexts/ProductsProvider";
import { CartProvider } from "./contexts/CartProvider";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <RouterProvider router={Router} />
        <ToastContainer />
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
