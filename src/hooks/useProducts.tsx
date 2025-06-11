import { useEffect, useState } from "react";
import { ProductProps } from "../contexts/ProductsContext";

export function useProducts() {
  const [productsFetch, setProductsFetch] = useState<ProductProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data: ProductProps[] = await response.json();
        setProductsFetch(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProducts();
  }, []);

  return { productsFetch };
}
