import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { ProductProps } from "../../types/product";

import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router";

import { toast } from "react-toastify";

interface CardCartProps {
  product: ProductProps;
  className?: string;
}

export function CardProduct({ product, className = "" }: CardCartProps) {
  const CartData = useContext(CartContext);

  return (
    <div
      className={`
        w-full max-w-xs  bg-dark-surface rounded-2xl shadow-md p-4 h-[380px] flex flex-col
        ${className}
       `}
    >
      <Link title="Ver detalhes do produto" to={`produto/${product.id}`}>
        <div className="w-full h-40 bg-white rounded-lg mb-4 cursor-pointer">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-contain rounded-lg"
          />
        </div>
      </Link>
      <div className="bg-amber-30 flex-1 flex flex-col justify-between gap-2">
        <h2 className="text-lg font-semibold text-text-primary line-clamp-2">
          {product.title}
        </h2>
        <p className="text-sm text-secondary-text line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <p className="font-extrabold text-base">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>

          <button
            onClick={() => {
              CartData?.addToCart(product);
              toast("Produto adicionado com sucesso!");
            }}
            title="Adicionar item ao carrinho"
            className="text-secondary-text bg-border-muted p-2 rounded cursor-pointer hover:bg-gray-700 transition-colors"
          >
            <IoIosAdd size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
