import TitleCustom from "../../components/TitleCustom";
import { CardProduct } from "../../components/CardProduct";

import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

import { FaReact } from "react-icons/fa";

export default function HomePage() {
  const productsData = useContext(ProductsContext);

  return (
    <main className="container mx-auto p-4">
      <section className="w-full h-dvh mb-10 border border-primary-btn-hover/40 rounded-xl flex justify-center items-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <FaReact className="text-primary-btn text-5xl sm:text-8xl md:text-9xl" />
          <div className="space-y-6">
            <h1 className="font-extrabold text-6xl sm:text-7xl md:text-9xl">
              Shopping
            </h1>
            <h2 className="font-bold text-xl sm:text-2xl md:text-4xl">
              Descubra nossos ultimos produtos!
            </h2>
          </div>
        </div>
      </section>
      <TitleCustom>Nossos Produtos</TitleCustom>
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
