import { Product } from "../interfaces/interfaces";
import { filterQuery } from "../utils/filterQuery";

export const Category = {
  products: (
    parent: any,
    { filter }: { filter: any },
    { products }: { products: Product[] }
  ) => {
    const { id } = parent;
    if (filter) {
      products = filterQuery(filter, products);
    }

    return products.filter((product) => product.categoryId === id);
  },
};
