import React from "react";

interface TitleCustomProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export default function TitleCustom({
  children,
  className = "",
  ...props
}: TitleCustomProps) {
  return (
    <h2
      {...props}
      className={`font-extrabold text-2xl md:text-3xl lg:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
}
