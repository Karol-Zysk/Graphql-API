import { Category, Product } from "../interfaces/interfaces";
import { Mutation } from "../resolvers/Mutation";

describe("Mutation", () => {
  it("addCategory should add a new category to the categories array", () => {
    const categories: Category[] = [];
    const newCategory = { name: "Test Category" };
    Mutation.addCategory(null, { input: newCategory }, { categories });
    expect(categories.length).toEqual(1);
    expect(categories[0].name).toEqual("Test Category");
  });

  it("addProduct should add a new product to the products array", () => {
    const products: Product[] = [];
    const newProduct = {
      name: "Test Product",
      price: 10.99,
      description: "New T-shirt",
      quantity: 4,
      onSale: true,
    };
    Mutation.addProduct(
      null,
      {
        input: newProduct,
      },
      { products }
    );
    expect(products.length).toEqual(1);
    expect(products[0].name).toEqual("Test Product");
    expect(products[0].price).toEqual(10.99);
  });
});
