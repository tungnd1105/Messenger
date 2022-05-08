import {InMemoryCacheConfig} from "@apollo/client";
import {AppLocalStateVar} from "@hooks/app/LocalState";

export const cacheConfig: InMemoryCacheConfig = {
  typePolicies:{
    Query:{
      fields:{
        appLocalState: {
          read() {
            return AppLocalStateVar()
          }
        }
      }
    }
  }
}