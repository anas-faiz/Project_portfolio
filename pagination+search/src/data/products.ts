import type { Products } from "../utils/types";

export const products: Products = Array.from({ length: 60 }, (_, i) => {
  const categories = ["Electronics", "Fashion", "Furniture"] as const;
  const category = categories[i % categories.length];

  return {
    id: i + 1,
    title: `Product ${i + 1}`,
    description: `This is a high quality ${category} product ideal for students, developers and professionals.`,
    price: Math.floor(Math.random() * 100000) + 1000,
    category,
    rating: Number((Math.random() * 2 + 3).toFixed(1)) // ✅ now number
  };
});