import { products } from "../db/db";

export const Category = {
  products: (parent: any, args: any, context: any) => {
    const { id } = parent;

    return products.filter((product) => product.categoryId === id);
  },
};
