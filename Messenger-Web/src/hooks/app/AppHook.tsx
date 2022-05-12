import {useCallback} from "react";
import {useQuery} from "@apollo/client";
import {app_gql} from "@hooks/app/AppGraphql";
import {AppLocalStateVar} from "@hooks/app/LocalState";

export const useLayoutHook = () => {
  const {data: {appLocalState}} = useQuery(app_gql)

  const toggleDrawer = useCallback(() => {
    AppLocalStateVar({...appLocalState, isDrawerMini: !appLocalState.isDrawerMini})
  }, [appLocalState.isDrawerMini])

  return {
    toggleDrawer,
    isDrawerMini: appLocalState.isDrawerMini
  }
}