import { Link } from "react-router";

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
          <Link to={`produto/${product.id}`} key={product.id}>
            <CardProduct
              title={product.title}
              description={product.description}
              price={product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
              imgSrc={product.image}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}
