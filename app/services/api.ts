import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import type { DefaultOptions } from '@apollo/client';
import Config from 'react-native-config';

const httpLink = new HttpLink({ uri: Config.API_URL || '' });

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const client = new ApolloClient({
  cache: new InMemoryCache({ addTypename: false }),
  link: httpLink,
  defaultOptions,
});

export { client };

export const { mutate, query } = client;
