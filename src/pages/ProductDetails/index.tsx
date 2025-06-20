import { CardProduct } from "../../components/CardProduct";
import { useParams } from "react-router";

import { useContext, useEffect, useState } from "react";
import { ProductsContext, ProductProps } from "../../contexts/ProductsContext";

export default function ProductDetails() {
  const { productId } = useParams();
  const productsData = useContext(ProductsContext);
  const [product, setProduct] = useState<ProductProps>({} as ProductProps);

  useEffect(() => {
    const productData = productsData.find(
      (product) => product.id.toString() === productId
    );

    setProduct(productData!);
  }, [productId, productsData]);

  let valorFormatado = "R$ 0,00";
  if (typeof product.price === "number") {
    valorFormatado = product.price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    console.log("Valor formatado:", valorFormatado);
  }

  return (
    <main className="container h-full mx-auto my-20 p-4 flex items-center justify-center">
      <div className="border border-primary-btn rounded-3xl p-4">
        {product && (
          <CardProduct
            title={product.title}
            description={product.description}
            price={valorFormatado}
            imgSrc={product.image}
            className="line-clamp-none"
          />
        )}
      </div>
    </main>
  );
}
