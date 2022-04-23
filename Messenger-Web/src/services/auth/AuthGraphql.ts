import {gql} from "@apollo/client";

export const login_gql = gql`
  mutation login($username:String!, $password:String!){
    login(loginPayload: {username: $username, password: $password}){
      username
      authorities
      token {
        accessToken
        refreshToken  
      }  
    }  
  }
`