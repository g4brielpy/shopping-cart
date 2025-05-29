import TitleCustom from "../components/TitleCustom";
import { CardProduct } from "../components/CardProduct";

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <TitleCustom>Home</TitleCustom>
      <section
        id="products"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center"
      >
        <CardProduct
          title="produto"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          price="R$ 89,90"
          imgSrc="src/assets/images/produto.jpg"
        />
        <CardProduct
          title="produto"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          price="R$ 89,90"
          imgSrc="src/assets/images/produto.jpg"
        />
        <CardProduct
          title="produto"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          price="R$ 89,90"
          imgSrc="src/assets/images/produto.jpg"
        />
        <CardProduct
          title="produto"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          price="R$ 89,90"
          imgSrc="src/assets/images/produto.jpg"
        />
        <CardProduct
          title="produto"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          price="R$ 89,90"
          imgSrc="src/assets/images/produto.jpg"
        />
        <CardProduct
          title="produto"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          price="R$ 89,90"
          imgSrc="src/assets/images/produto.jpg"
        />
        <CardProduct
          title="produto"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          price="R$ 89,90"
          imgSrc="src/assets/images/produto.jpg"
        />
        <CardProduct
          title="produto"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          price="R$ 89,90"
          imgSrc="src/assets/images/produto.jpg"
        />
      </section>
    </main>
  );
}
