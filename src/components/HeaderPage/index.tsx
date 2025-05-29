import { GrCart } from "react-icons/gr";
import { FaReact } from "react-icons/fa";

import { Link } from "react-router";

export function HeaderPage() {
  return (
    <header className="container mx-auto flex justify-between items-center p-4 bg-lue-600 font-bold text-xl md:text-2xl lg:text-3xl">
      <Link to={"/"} className="flex items-center gap-2">
        <FaReact />
        Shopping
      </Link>
      <Link
        to={"carrinho/"}
        className="bg-border-muted hover:bg-border-muted/70 transition-all p-2 rounded"
      >
        <GrCart />
      </Link>
    </header>
  );
}
