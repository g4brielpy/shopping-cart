import { RouterProvider } from "react-router";
import { Router } from "./Routes";

import { ProductsProvider } from "./contexts/ProductsProvider";
import { CartProvider } from "./contexts/CartProvider";

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <RouterProvider router={Router} />
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
