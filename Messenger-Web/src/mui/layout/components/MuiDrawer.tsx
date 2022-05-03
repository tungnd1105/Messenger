import React from "react";
import {useDrawer} from "@app/hook/AppHook";
import {Drawer, DrawerProps} from "@mui/material";
import {MuiLayoutProps} from "@app-mui/layout/props/MuiLayoutProps";

export const MuiDrawer = (props?:DrawerProps) => {
  const {isDrawerOpen} = useDrawer()
   return (
     <Drawer {...MuiLayoutProps.drawer({open:isDrawerOpen})}>
       {props.children}
     </Drawer>
   )
}