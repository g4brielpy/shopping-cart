import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartItemsProps } from "../../types/cart";

import TitleCustom from "../../components/TitleCustom";
import { CardCart } from "../../components/CardCart";

export default function CartPage() {
  const [productsCart, setProductsCart] = useState<CartItemsProps[] | null>(
    null
  );
  const [totalCarrinho, setTotalCarrinho] = useState<number>(0);

  const CartData = useContext(CartContext);

  useEffect(() => {
    setProductsCart(CartData?.cartItems || null);
    setTotalCarrinho(CartData?.getTotal() || 0);
  }, [CartData]);

  if (totalCarrinho === 0) {
    return (
      <main className="container mx-auto p-4">
        <TitleCustom>Carrinho de Compras</TitleCustom>

        <section className="my-80">
          <p className="text-center text-2xl font-semibold text-gray-600">
            Seu carrinho está vazio.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="container mx-auto p-4">
      <TitleCustom>Carrinho de Compras</TitleCustom>

      <section className="my-8 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
        {productsCart?.map((product) => (
          <CardCart key={product.id} product={product} />
        ))}
      </section>
      <div className="max-w-4xl mx-auto mt-8 p-4 border-border-muted border rounded-lg shadow-md">
        <p className="text-gray-600">
          Total:{" "}
          {totalCarrinho.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button className="w-full p-4 rounded cursor-pointer font-bold bg-primary-btn hover:bg-primary-btn-hover transition-colors">
          Checkout
        </button>
      </div>
    </main>
  );
}
