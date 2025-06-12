import React from "react";
import { useProducts } from "../hooks/useProducts";
import { ProductsContext } from "./ProductsContext";

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { productsFetch } = useProducts();
  return (
    <ProductsContext.Provider value={productsFetch}>
      {children}
    </ProductsContext.Provider>
  );
};
