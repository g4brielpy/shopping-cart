import { useParams } from "react-router";

import { useContext, useEffect, useState } from "react";
import { ProductsContext, ProductProps } from "../../contexts/ProductsContext";

export default function ProductDetails() {
  const { productId } = useParams();
  const productsData = useContext(ProductsContext);

  const [product, setProduct] = useState<ProductProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const productData = productsData.find(
      (product) => product.id.toString() === productId
    );

    setProduct(productData || null);
    setIsLoading(false);
  }, [productId, productsData]);

  if (isLoading) {
    return (
      <h1 className="text-center mt-20 text-4xl font-bold">
        Buscando produto...
      </h1>
    );
  }

  if (!product) {
    return (
      <h1 className="text-center mt-20 text-4xl font-bold">
        Produto não encontrado.
      </h1>
    );
  }

  return <h1>Produto: {product.title}</h1>;
}
