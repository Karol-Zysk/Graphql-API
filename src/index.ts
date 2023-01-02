import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/typeDefs";
import { Product } from "./resolvers/Product";
import { Category } from "./resolvers/Category";
import { Query } from "./resolvers/Query";
import { categories, products, reviews } from "./db/db";

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Category, Product },
  context: { categories, products, reviews },
});

server.listen().then(({ url }) => {
  console.log(`server is ready at ${url}`);
});
