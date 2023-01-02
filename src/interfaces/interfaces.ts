export type Product = {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
  onSale: boolean;
  categoryId: string;
};

export type Category = {
  id: string;
  name: string;
};
