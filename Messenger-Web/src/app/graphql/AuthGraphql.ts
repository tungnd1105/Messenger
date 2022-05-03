import {gql} from "@apollo/client";

export const gql_login = gql`
  mutation login($username: String!, $password: String!) {
    login(loginPayload: {username: $username, password: $password}) {
      username
      authorities
      token{
        accessToken
        refreshToken
      }  
    }  
  }
`