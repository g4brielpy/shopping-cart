import TitleCustom from "../../components/TitleCustom";
import { CardCart } from "../../components/CardCart";

export default function CartPage() {
  return (
    <main className="container mx-auto p-4">
      <TitleCustom>Carrinho de Compras</TitleCustom>

      <section className="my-8">
        <p className="text-center text-gray-600">Seu carrinho está vazio.</p>
      </section>

      <section className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2  gap-4 justify-items-center">
        <CardCart
          title="produto"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          price="R$ 89,90"
        />
        <CardCart
          title="produto"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          price="R$ 89,90"
        />
        <CardCart
          title="produto"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          price="R$ 89,90"
        />
        <CardCart
          title="produto"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          price="R$ 89,90"
        />
        <CardCart
          title="produto"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          price="R$ 89,90"
        />
        <CardCart
          title="produto"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
          price="R$ 89,90"
        />
      </section>
    </main>
  );
}
