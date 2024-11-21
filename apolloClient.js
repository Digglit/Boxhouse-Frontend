import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `${
    process.env.NEXT_PUBLIC_IS_PRODUCTION === "true"
      ? process.env.NEXT_PUBLIC_PROD_WEBSERVER_ENDPOINT
      : process.env.NEXT_PUBLIC_LOCAL_WEBSERVER_ENDPOINT
  }/graphql`, // Replace with your Strapi GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
