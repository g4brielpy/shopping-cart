import { CardProduct } from "../../components/CardProduct";

export default function ProductDetails() {
  return (
    <main className="container h-full mx-auto my-20 p-4 flex items-center justify-center">
      <div className="border border-primary-btn rounded-3xl p-4">
        <CardProduct
          title="produto"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          price="R$ 89,90"
          imgSrc="src/assets/images/produto.jpg"
          className="line-clamp-none"
        />
      </div>
    </main>
  );
}
