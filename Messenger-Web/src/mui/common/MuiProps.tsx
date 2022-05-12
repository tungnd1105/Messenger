import {Theme} from "@app-mui/common/theme/Theme";

export const openedDuration = (props:string|string[]) => (
  Theme.transitions.create(props,{
    easing: Theme.transitions.easing.sharp,
    duration: Theme.transitions.duration.enteringScreen,
  })
)

export const closedDuration = (props:string|string[]) => (
  Theme.transitions.create(props,{
    easing: Theme.transitions.easing.sharp,
    duration: Theme.transitions.duration.leavingScreen,
  })
)