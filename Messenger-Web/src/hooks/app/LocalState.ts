import {makeVar} from "@apollo/client";

export interface AppLocalState {
  isDrawerMini: boolean;
}

const initialState: AppLocalState = {
  isDrawerMini: false
}

export const AppLocalStateVar = makeVar<AppLocalState>(initialState);