import { createContext } from "react";

import { ProductProps } from "../types/product";
import { CartItemsProps } from "../types/cart";

interface CartContextProps {
  cartItems: CartItemsProps[];
  total: number;
  addToCart: (item: ProductProps) => void;
  removeFromCart: (item: ProductProps) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps | null>(null);
