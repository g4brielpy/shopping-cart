interface CardProductProps {
  title: string;
  description: string;
  price: string;
  imgSrc?: string;
  className?: string;
}

export function CardProduct({
  title,
  description,
  price,
  imgSrc,
  className = "",
}: CardProductProps) {
  return (
    <div
      className={`
        w-full max-w-xs  bg-dark-surface rounded-2xl shadow-md p-4 cursor-pointer ${
          imgSrc && "min-h-[320px]"
        } 
        ${className}
       `}
    >
      {imgSrc && (
        <div className="w-full h-40 bg-border-muted rounded-lg mb-4">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold text-text-primary mt-2">
          {title}
        </h2>
        <p className="text-sm text-secondary-text line-clamp-2">
          {description}
        </p>
        <p className="font-extrabold text-base mt-2">{price}</p>
      </div>
    </div>
  );
}
