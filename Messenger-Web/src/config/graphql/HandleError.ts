import {gql} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import {client} from "@config/graphql/ClientGraphql";

const refresh_token_gql = gql`
    query refreshToken{
        refreshToken{
            accessToken
            refreshToken
        }
    }`

const RefreshToken = () => client
  .query({
    query: refresh_token_gql
  }).then(response => {
    localStorage.setItem('accessToken', response.data.refreshToken.token.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken.token.refreshToken);
    return response.data.refreshToken.token.accessToken
  }).catch(error => {
    //todo: navigate to login page
  })

export const handleError = onError(props => {

  const {graphQLErrors, networkError, operation} = props;

  if (graphQLErrors) {
    for (let error of graphQLErrors) {
      switch (error.extensions.code) {
        case 'UNAUTHENTICATED':
          const oldHeaders = operation.getContext().headers;
          operation.setContext({
            headers: {...oldHeaders, authorization: `Bearer ${RefreshToken()}`}
          })
      }
    }
  }
  if (networkError) {
    //todo: alert network error
    console.log(`[Network error]: ${networkError}`);
  }
})