import { Category, Review } from "../interfaces/interfaces";

export const Product = {
  category: (
    { categoryId }: { categoryId: string },
    args: any,
    { categories }: { categories: Category[] }
  ) => {
    return categories.find((category) => category.id === categoryId);
  },
  reviews: (
    { id }: { id: string },
    args: any,
    { reviews }: { reviews: Review[] }
  ) => {
    return reviews.filter((review) => review.productId === id);
  },
};
