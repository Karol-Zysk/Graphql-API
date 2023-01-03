import { reviews } from "../db/db";
import { Product } from "../interfaces/interfaces";

export const filterQuery = function (
  filter: { avgRating: number; onSale?: boolean },
  filteredProducts: Product[]
) {
  const { onSale, avgRating } = filter;

  if (filter) {
    if (onSale) {
      filteredProducts = filteredProducts.filter((products) => {
        return products.onSale;
      });
    }
    if (avgRating) {
      filteredProducts = filteredProducts.filter((product) => {
        let sumRaiting = 0;
        let numberOfReviews = 0;
        reviews.forEach((review) => {
          if (review.productId === product.id) {
            sumRaiting += review.rating;
            numberOfReviews++;
          }
        });
        const avgProductRating = sumRaiting / numberOfReviews;
        return avgProductRating >= avgRating;
      });
    }
  }
  return filteredProducts;
};
