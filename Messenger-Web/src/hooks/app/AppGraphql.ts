import {gql} from "@apollo/client";

export const app_gql = gql`
  query getAppLocalState {
    appLocalState @client {
      isDrawerMini      
    }
  }
`