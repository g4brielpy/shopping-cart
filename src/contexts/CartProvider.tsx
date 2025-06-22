import { CartContext } from "./CartContext";
import { ProductProps } from "./ProductsContext";
import { useState } from "react";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<ProductProps[]>([]);

  function addToCart(item: ProductProps) {
    setCartItems((oldCartItems) => [...oldCartItems, item]);
    console.log("Item adicionado com sucesso!");
  }

  function removeFromCart(item: ProductProps) {
    const indexToRemove = cartItems.findIndex(
      (product) => product.id == item.id
    );

    const newCartItems = [...cartItems];
    newCartItems.splice(indexToRemove, 1);

    console.log(newCartItems);
    setCartItems(newCartItems);
  }

  function clearCart() {
    console.log("Limpar carrinho");
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
