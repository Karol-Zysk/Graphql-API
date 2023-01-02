import { Category, Product } from "../interfaces/interfaces";
export const Query = {
  products: (parent: any, args: any, { products }: { products: Product[] }) =>
    products,
  product: (
    parent: any,
    { id }: { id: string },
    { products }: { products: Product[] }
  ) => {
    return products.find((product) => product.id === id);
  },
  categories: (
    parent: any,
    args: any,
    { categories }: { categories: Category[] }
  ) => categories,
  category: (
    parent: any,
    args: any,
    { categories }: { categories: Category[] }
  ) => {
    const { id } = args;
    return categories.find((category) => category.id === id);
  },
};
