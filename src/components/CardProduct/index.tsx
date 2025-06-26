import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductProps } from "../../types/product";

import { IoIosAdd } from "react-icons/io";

interface CardCartProps {
  product: ProductProps;
  className?: string;
}

export function CardProduct({ product, className = "" }: CardCartProps) {
  const CartData = useContext(CartContext);

  return (
    <div
      className={`
        w-full max-w-xs  bg-dark-surface rounded-2xl shadow-md p-4 cursor-pointer ${
          product.image && "min-h-[320px]"
        } 
        ${className}
       `}
    >
      {product.image && (
        <div className="w-full h-40 bg-white rounded-lg mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-contain rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-text-primary mt-2 line-clamp-2">
          {product.title}
        </h2>
        <p className="text-sm text-secondary-text line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <p className="font-extrabold text-base mt-2">{product.price}</p>

          <button
            onClick={() => CartData?.addToCart(product)}
            title="Adicionar ao carrinho"
            className="text-secondary-text bg-border-muted p-2 rounded cursor-pointer hover:bg-gray-700 transition-colors"
          >
            <IoIosAdd size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
