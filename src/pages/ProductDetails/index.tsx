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

  return (
    <main className="container h-screen mx-auto p-4 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-[400px] md:w-1/2 h-auto object-contain rounded-lg"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-primary-text">
              {product.title}
            </h1>
            <p className="text-secondary-text">{product.description}</p>
            <p className="text-xl font-extrabold text-text-primary">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
