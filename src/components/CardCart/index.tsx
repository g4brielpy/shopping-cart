import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

interface CardCartProps {
  title: string;
  description: string;
  price: string;
  className?: string;
}

export function CardCart({
  title,
  description,
  price,
  className = "",
}: CardCartProps) {
  return (
    <div
      className={`
        w-full bg-dark-surface rounded-2xl shadow-md p-4
        ${className}
       `}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-text-primary mt-2">
          {title}
        </h2>
        <p className="text-sm text-secondary-text line-clamp-3">
          {description}.
        </p>
        <p className="font-extrabold text-base mt-2">{price}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2">
          <button className="text-secondary-text bg-border-muted p-2 rounded cursor-pointer hover:bg-gray-700 transition-colors">
            <IoIosRemove size={20} />
          </button>
          <span className="text-secondary-text">1</span>
          <button className="text-secondary-text bg-border-muted p-2 rounded cursor-pointer hover:bg-gray-700 transition-colors">
            <IoIosAdd size={20} />
          </button>
        </div>
        <button className="text-secondary-text bg-border-muted p-2 rounded cursor-pointer hover:text-red-500 transition-colors">
          <RiDeleteBin6Line size={24} />
        </button>
      </div>
    </div>
  );
}
