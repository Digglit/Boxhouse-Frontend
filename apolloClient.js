import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `${process.env.NEXT_NODE_ENDPOINT}/graphql`, // Replace with your Strapi GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
