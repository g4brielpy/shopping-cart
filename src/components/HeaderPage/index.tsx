import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";

import { FaReact } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

import { Link } from "react-router";

export function HeaderPage() {
  const CartData = useContext(CartContext);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    const total = CartData?.cartItems?.length;
    setTotalItems(total || 0);
  }, [CartData]);

  return (
    <header className="container mx-auto flex justify-between items-center p-4 bg-lue-600 font-bold text-xl md:text-2xl lg:text-3xl">
      <Link to={"/"} className="flex items-center gap-2">
        <FaReact />
        Shopping
      </Link>
      <Link
        to={"carrinho/"}
        className="bg-border-muted hover:bg-border-muted/70 transition-all p-2 rounded relative"
      >
        {totalItems >= 1 && (
          <span className="absolute -top-1 left-5 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {totalItems}
          </span>
        )}
        <GrCart />
      </Link>
    </header>
  );
}
