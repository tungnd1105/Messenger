import {appState} from "@app/graphql/LocalGraphql";
import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "/graphql"
})

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        appState: appState
      }
    }
  }
});

export const client = new ApolloClient({
  link: httpLink,
  cache: cache
})