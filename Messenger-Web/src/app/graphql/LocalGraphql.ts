import {gql} from "@apollo/client";
import {AppStateVar} from "@app/store/AppStore";

export const gql_app = gql`
  query getAppState {
    appState @client {
      isDrawerOpen
    }
  }
`

export const appState = {
  read(){
    return AppStateVar();
  }
}