import { CartContext } from "./CartContext";
import { ProductProps } from "./ProductsContext";
import { useState } from "react";

function addToCart() {
  console.log("Adicionar item");
}

function removeFromCart() {
  console.log("Remover item");
}

function clearCart() {
  console.log("Limpar carrinho");
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<ProductProps[]>([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
