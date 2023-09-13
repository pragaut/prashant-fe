import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

export function createApolloClient() {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT, // Use environment variable for the GraphQL API endpoint
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.error(`GraphQL error: ${message}`);
        // You can also perform additional actions with the error data if needed
      });
    }

    if (networkError) {
      console.error(`Network error: ${networkError}`);
      // Handle network errors or perform additional actions
    }
  });

  // Combine the HTTP link and the error link
  const link = ApolloLink.from([errorLink, httpLink]);

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: 'all', // Set the error policy for watchQuery
      },
      query: {
        errorPolicy: 'all', // Set the error policy for query
      },
      mutate: {
        errorPolicy: 'all', // Set the error policy for mutate
      },
    },
  });
}
