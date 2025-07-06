import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartItemsProps } from "../../types/cart";

import { toast } from "react-toastify";

interface CardCartProps {
  product: CartItemsProps;
  className?: string;
}

export function CardCart({ product, className = "" }: CardCartProps) {
  const CartData = useContext(CartContext);

  return (
    <div
      className={`
        flex flex-col justify-between gap-2
        w-full bg-dark-surface rounded-2xl shadow-md p-4
        ${className}
       `}
    >
      <div className="min-h-[200px] flex flex-col justify-between gap-4">
        <h2 className="text-lg font-semibold text-text-primary mt-2">
          {product.title}
        </h2>
        <p className="text-sm text-secondary-text line-clamp-3">
          {product.description}.
        </p>
        <p className="font-extrabold text-base mt-2">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => CartData?.decrementQuantity(product)}
            className="text-secondary-text bg-border-muted p-2 rounded cursor-pointer hover:bg-gray-700 transition-colors"
          >
            <IoIosRemove size={20} />
          </button>
          <span className="text-secondary-text">{product.amount}</span>
          <button
            onClick={() => CartData?.addToCart(product)}
            className="text-secondary-text bg-border-muted p-2 rounded cursor-pointer hover:bg-gray-700 transition-colors"
          >
            <IoIosAdd size={20} />
          </button>
        </div>
        <button
          onClick={() => {
            CartData?.removeFromCart(product);
            toast("Produto deletado do carrinho!");
          }}
          className="text-secondary-text bg-border-muted p-2 rounded cursor-pointer hover:text-red-500 transition-colors"
        >
          <RiDeleteBin6Line size={24} />
        </button>
      </div>
    </div>
  );
}
