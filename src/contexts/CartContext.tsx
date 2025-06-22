import { createContext } from "react";
import { ProductProps } from "./ProductsContext";

interface CartContextProps {
  cartItems: ProductProps[];
  addToCart: (item: ProductProps) => void;
  removeFromCart: (item: ProductProps) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps | null>(null);
