import {makeVar} from "@apollo/client";

export interface AppLocalState {
  isDrawerOpen: boolean;
}

const initialState: AppLocalState = {
  isDrawerOpen: true
}

export const AppLocalStateVar = makeVar<AppLocalState>(initialState);