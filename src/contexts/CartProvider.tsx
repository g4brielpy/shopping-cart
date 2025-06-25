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
      incrementQuantity(item);
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

    setCartItems(newCartItems);
  }

  function incrementQuantity(item: ProductProps) {
    const indexToIncrement = cartItems.findIndex(
      (product) => product.id === item.id
    );

    const copyItems = [...cartItems];
    copyItems[indexToIncrement].amount += 1;

    setCartItems(copyItems);
  }

  function decrementQuantity(item: ProductProps) {
    const indexToDecrement = cartItems.findIndex(
      (product) => product.id === item.id
    );

    const copyItems = [...cartItems];

    if (copyItems[indexToDecrement].amount === 1) {
      removeFromCart(item);
      return;
    }
    copyItems[indexToDecrement].amount -= 1;

    setCartItems(copyItems);
  }

  function clearCart() {
    console.log("Limpar carrinho");
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        total: 100,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
