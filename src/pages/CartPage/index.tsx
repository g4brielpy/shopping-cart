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
      <div className="max-w-4xl mx-auto mt-8 p-4 border-border-muted border rounded-lg shadow-md">
        <p className="text-gray-600">Total: R$ 345,00</p>
        <button className="w-full p-4 rounded cursor-pointer font-bold bg-primary-btn hover:bg-primary-btn-hover transition-colors">
          Checkout
        </button>
      </div>
    </main>
  );
}
