import {handleError} from "@config/graphql/HandleError";
import {setContext} from "@apollo/client/link/context";
import {cacheConfig} from "@config/graphql/CacheConfig";
import {ApolloClient, createHttpLink, from, GraphQLRequest, InMemoryCache} from "@apollo/client";

const memoryCache = new InMemoryCache(cacheConfig);
const httpLink = createHttpLink({uri: "/graphql"})

const authLink = setContext((request: GraphQLRequest, {headers}) => {
  return {
    headers: {...headers, authorization: localStorage.getItem("accessToken") || null}
  }
})

export const client = new ApolloClient({
  link: from([httpLink, authLink, handleError]),
  cache: memoryCache
})