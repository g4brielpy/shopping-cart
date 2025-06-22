import { createContext } from "react";
import { ProductProps } from "./ProductsContext";

interface CartContextProps {
  cartItems: ProductProps[];
  addToCart: () => void;
  removeFromCart: () => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps | null>(null);
