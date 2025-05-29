interface CardProductProps {
  title: string;
  description: string;
  price: string;
  imgSrc: string;
}

export function CardProduct({
  title,
  description,
  price,
  imgSrc,
}: CardProductProps) {
  return (
    <div className="w-full max-w-xs min-h-[320px] bg-dark-surface rounded-2xl shadow-md p-4 cursor-pointer">
      <div className="w-full h-40 bg-border-muted rounded-lg ">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h2 className="text-lg font-semibold text-text-primary mt-2">
          {title}
        </h2>
        <p className="text-sm text-secondary-text line-clamp-2">
          {description}
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="font-extrabold text-base mt-2">{price}</p>
      </div>
    </div>
  );
}
