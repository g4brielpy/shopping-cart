import TitleCustom from "../../components/TitleCustom";
import { CardProduct } from "../../components/CardProduct";

import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

export default function HomePage() {
  const productsData = useContext(ProductsContext);

  return (
    <main className="container mx-auto p-4">
      <TitleCustom>Home</TitleCustom>
      <section
        id="products"
        className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center"
      >
        {productsData.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
