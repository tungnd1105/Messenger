import {useQuery} from "@apollo/client";
import {AppStateVar} from "@app/store/AppStore";
import {gql_app} from "@app/graphql/LocalGraphql";

export const useDrawer = () => {
  const { data: { appState }} = useQuery(gql_app);
  return {
    isDrawerOpen: appState.isDrawerOpen,
    toggleDrawer: () => AppStateVar({...appState, isDrawerOpen: !appState.isDrawerOpen}),
  }
}