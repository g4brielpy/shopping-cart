import { createContext } from "react";
import { ProductProps } from "../types/product";

export const ProductsContext = createContext<ProductProps[]>([]);
