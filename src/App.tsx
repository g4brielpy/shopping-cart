import { RouterProvider } from "react-router";
import { Router } from "./Routes";
import { ProductsProvider } from "./contexts/ProductsProvider";

function App() {
  return (
    <ProductsProvider>
      <RouterProvider router={Router} />
    </ProductsProvider>
  );
}

export default App;
