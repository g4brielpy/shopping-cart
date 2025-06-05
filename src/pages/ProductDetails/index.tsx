import { CardProduct } from "../../components/CardProduct";

export default function ProductDetails() {
  return (
    <CardProduct
      title="produto"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
      price="R$ 89,90"
      imgSrc="src/assets/images/produto.jpg"
      className="line-clamp-none"
    />
  );
}
