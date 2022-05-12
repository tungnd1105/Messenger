import {gql} from "@apollo/client";
import {client} from "@config/graphql/ClientGraphql";
import {onError} from "@apollo/client/link/error";

const refresh_token_gql = gql`
  query refreshToken{
    refreshToken{
      accessToken
      refreshToken
    }
  }`

const refreshToken = () =>
  client.query({
    query: refresh_token_gql,
    context:{
      headers: {
        authorization: `Bearer ${localStorage.getItem('refreshToken')}`
      }
    }
  }).then(response => {
    localStorage.setItem('accessToken', response.data.refreshToken.token.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken.token.refreshToken);
    return response.data.refreshToken.token.accessToken
  }).catch(error => {
    //todo: navigate to login page
  })

export const errorLink = onError(props => {
  const {graphQLErrors, networkError, operation,forward} = props;
  if (networkError){
    const oldHeaders = operation.getContext().headers;
    operation.setContext({
      headers: {...oldHeaders, authorization: `Bearer ${refreshToken()}`}
    })
    forward(operation)
  }

})