import { ProductProps } from "./product";

export interface CartItemsProps extends ProductProps {
  amount: number;
}
export interface CartContextProps {
  cartItems: CartItemsProps[];
  total: number;
  addToCart: (item: ProductProps) => void;
  removeFromCart: (item: ProductProps) => void;
  clearCart: () => void;
}
