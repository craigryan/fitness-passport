import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/schema";
import { resolvers } from "./resolvers/memberResolvers";

const server = new ApolloServer({ typeDefs, resolvers });

// TODO Move to configuration / env variable
const SERVER_PORT = 4000;

server.listen({ port: SERVER_PORT }).then(({ url }) => {
  console.log(`Fitness Passport Members Server ready at ${url}`);
});
