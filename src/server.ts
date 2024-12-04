import { ApolloServer } from '@apollo/server';
import { startStandaloneServer, StandaloneServerContextFunctionArgument } from '@apollo/server/standalone';
import { memberTypeDefs } from './schema/schema';
import { resolvers } from './modules/members/memberResolvers';

/**
 * Initializes and starts the Apollo GraphQL server for the Fitness Passport Members service.
 * 
 * Once started, open the browser http://localhost:4000 (default) to access the GraphQL Playground.
 * 
 * @module server
 * 
 * @requires @apollo/server
 * @requires ./schema/member
 * @requires ./schema/membership
 * @requires ./schema/visit
 * @requires ./members/memberResolvers
 * 
 * @constant {number} SERVER_PORT - The port on which the server will listen. This should be moved to a configuration file or environment variable.
 */
async function startServer() {
  const server = new ApolloServer({ typeDefs: memberTypeDefs, resolvers });

  // TODO Move to configuration / env variable
  const SERVER_PORT = 4000;

  const { url } = await startStandaloneServer(server, {
    context: async ({ req }: StandaloneServerContextFunctionArgument) => ({ token: req.headers.token }),
    listen: { port: SERVER_PORT },
  });

  console.log(`Fitness Passport Members GQL Server ready at ${url}`);
}

// Call the async function to start the server
startServer().catch((error) => {
  console.error('Failed to start Fitness Passport Members GQL server:', error);
});
