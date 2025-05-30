import TitleCustom from "../../components/TitleCustom";

export default function CartPage() {
  return (
    <main className="container mx-auto p-4">
      <TitleCustom>Carrinho de Compras</TitleCustom>
      <section className="my-8">
        <p className="text-center text-gray-600">Seu carrinho está vazio.</p>
      </section>
      <section></section>
    </main>
  );
}
