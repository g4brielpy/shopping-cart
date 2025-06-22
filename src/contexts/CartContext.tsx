import { createContext } from "react";
import { ProductProps } from "./ProductsContext";

interface CartContextProps {
  products: ProductProps[];
  addToCart: () => void;
  removeFromCart: () => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  return <CartContext.Provider value={null}>{children}</CartContext.Provider>;
}
