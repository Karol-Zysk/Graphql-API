import { ApolloServer, gql } from "apollo-server";
import { categories, products } from "./data";
import { GraphQLResolveInfo } from "graphql";

const typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category]!
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean
    category: Category
  }
  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;

const resolvers = {
  Query: {
    products: () => products,
    product: (parent: GraphQLResolveInfo, args: any, context: any) => {
      const { id } = args;

      return products.find((product) => product.id === id);
    },
    categories: (parent: any, args: any, context: any) => categories,
    category: (parent: any, args: any, context: any) => {
      const { id } = args;
      return categories.find((category) => category.id === id);
    },
  },

  Category: {
    products: (parent: any, args: any, context: any) => {
      const { id } = parent;

      return products.filter((product) => product.categoryId === id);
    },
  },
  Product: {
    category: (parent: any, args: any, context: any) => {
      const { categoryId } = parent;
      return categories.find((category) => category.id === categoryId);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server is ready at ${url}`);
});
