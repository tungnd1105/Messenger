import React from "react";
import {FiMenu} from "react-icons/fi";
import {useDrawer} from "@app/hook/AppHook";
import {MuiLogo} from "@app-mui/common/components/MuiLogo";
import {AppBar, IconButton, Stack, Toolbar} from "@mui/material";
import {MuiLayoutProps} from "@app-mui/layout/props/MuiLayoutProps";

export const MuiHeader: React.FunctionComponent = () => {
  const {toggleDrawer} = useDrawer()
  return (
    <AppBar{...MuiLayoutProps.header}>
      <Toolbar>
        <Stack {...MuiLayoutProps.stack}>
          <IconButton {...MuiLayoutProps.btnOpenDrawer} onClick={toggleDrawer}>
            <FiMenu/>
          </IconButton>
          <MuiLogo isDefault={false}/>
        </Stack>
      </Toolbar>
    </AppBar>
  )

}