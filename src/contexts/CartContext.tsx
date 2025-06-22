import { createContext } from "react";
import { ProductProps } from "./ProductsContext";

export interface CartItemsProps extends ProductProps {
  amount: number;
}
interface CartContextProps {
  cartItems: CartItemsProps[];
  total: number;
  addToCart: (item: ProductProps) => void;
  removeFromCart: (item: ProductProps) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps | null>(null);
