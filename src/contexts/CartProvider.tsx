import { useState } from "react";
import { CartContext } from "./CartContext";

import { CartItemsProps } from "../types/cart";
import { ProductProps } from "../types/product";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItemsProps[]>([]);

  function addToCart(item: ProductProps) {
    const indexExists = cartItems.findIndex(
      (product) => product.id === item.id
    );

    if (indexExists !== -1) {
      /*
      Verificar se o item já existe no carrinho
      caso sim = incrementar a prop 'amount'.
      */
      const copyItems = [...cartItems];
      copyItems[indexExists].amount += 1;

      setCartItems(copyItems);
      return;
    }

    const newItem: CartItemsProps = {
      ...item,
      amount: 1,
    };
    setCartItems((prevCartItems) => [...prevCartItems, newItem]);
  }

  function removeFromCart(item: ProductProps) {
    const indexToRemove = cartItems.findIndex(
      (product) => product.id === item.id
    );

    const newCartItems = [...cartItems];
    newCartItems.splice(indexToRemove, 1);

    console.log(newCartItems);
    setCartItems(newCartItems);

    console.log("Item deletado com sucesso!");
  }

  function clearCart() {
    console.log("Limpar carrinho");
  }

  return (
    <CartContext.Provider
      value={{ cartItems, total: 100, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
