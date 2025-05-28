import { HiMenuAlt4 } from "react-icons/hi";
import { FaReact } from "react-icons/fa";

export function HeaderPage() {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <span className="flex items-center gap-2">
        <FaReact />
        Shopping
      </span>
      <button className="bg-border-muted hover:bg-border-muted/70 transition-all p-2 rounded">
        <HiMenuAlt4 />
      </button>
    </header>
  );
}
