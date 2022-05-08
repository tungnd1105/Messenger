import {AppBarProps, IconButtonProps, StackProps} from "@mui/material";

export const MuiHeaderProps = {

  stack:{
    spacing: 2,
    direction: "row",
    alignItems: "center",
    justifyContent: "center"
  } as StackProps,

 header:{
   elevation: 1,
   position: "fixed",
   color: "primary"
 } as AppBarProps,

  btnToggleDrawer: {
   color: 'inherit',
   edge: 'start',
  } as IconButtonProps

}