import {makeVar} from "@apollo/client";
import {AppState} from "@app/interface/AppState";

const initialAppState:AppState = {
   isDrawerOpen: false,
};

export const AppStateVar = makeVar<AppState>(initialAppState);