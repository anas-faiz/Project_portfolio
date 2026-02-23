export interface product{
    id: string;
    name: string;
    price: number;
    category: string;
}

export type CartItem = {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
};
