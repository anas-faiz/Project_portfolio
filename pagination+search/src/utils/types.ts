
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: "Electronics" | "Fashion" | "Furniture";
  rating: number;
}

export type Products = Product[];