import { v4 as uuid } from "uuid";
import { Category, Product, Review } from "../interfaces/interfaces";

export const Mutation = {
  addCategory: (
    parent: any,
    args: { input: Omit<Category, "id"> },
    { categories }: { categories: Category[] }
  ) => {
    const newCategory = {
      id: uuid(),
      ...args.input,
    };
    categories.push(newCategory);
    return newCategory;
  },
  addProduct: (
    parent: any,
    args: { input: Omit<Product, "id"> },
    context: { products: Product[] }
  ) => {
    const { products } = context;
    const newProduct = {
      id: uuid(),
      ...args.input,
    };

    products.push(newProduct);
    return newProduct;
  },
  addReview: (
    parent: any,
    args: { input: Omit<Review, "id"> },
    context: { reviews: Review[] }
  ) => {
    const { reviews } = context;
    const newReview = {
      id: uuid(),
      ...args.input,
    };

    reviews.push(newReview);
    return newReview;
  },
};
