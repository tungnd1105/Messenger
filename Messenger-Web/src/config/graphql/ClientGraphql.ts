import {errorLink} from "@config/graphql/HandleErrors";
import {setContext} from "@apollo/client/link/context";
import {cacheConfig} from "@config/graphql/CacheConfig";
import {ApolloClient, ApolloLink, createHttpLink, GraphQLRequest, InMemoryCache} from "@apollo/client";

const memoryCache = new InMemoryCache(cacheConfig);
const httpLink = createHttpLink({uri: "/graphql"});

const authLink = setContext((request: GraphQLRequest, {headers}) => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? {headers: {...headers, Authorization: `Bearer ${accessToken}`}} : {headers};
})

export const client = new ApolloClient({
  cache: memoryCache,
  link: ApolloLink.from([errorLink, authLink, httpLink])
})