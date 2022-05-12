import React from "react";
import {FiMenu} from "react-icons/fi";
import {useLayoutHook} from "@hooks/app/AppHook";
import {MuiBodyProps} from "@app-mui/app/props/MuiBodyProps";
import {MuiMainProps} from "@app-mui/app/props/MuiMainProps";
import {useGetUserProfile} from "@hooks/user/UserProfileHook";
import {MuiLogo} from "@app-mui/common/logo/components/MuiLogo";
import {MuiHeaderProps} from "@app-mui/app/props/MuiHeaderProps";
import {MuiDrawerProps} from "@app-mui/app/props/MuiDrawerProps";
import {AppBar, Box, Container, Drawer, IconButton, Stack, Toolbar} from "@mui/material";

export const MuiApp: React.FunctionComponent = () => {
  const {toggleDrawer, isDrawerMini} = useLayoutHook()
  const {error, data, loading} = useGetUserProfile()

  return (
    <React.StrictMode>
      <AppBar {...MuiHeaderProps.header}>
        <Toolbar>
          <Stack {...MuiHeaderProps.stack}>
            <IconButton {...MuiHeaderProps.btnToggleDrawer} onClick={toggleDrawer}>
              <FiMenu size={24}/>
            </IconButton>
            <MuiLogo isDefault={false}/>
          </Stack>
        </Toolbar>
      </AppBar>
      <Container {...MuiBodyProps.container}>
        <Drawer {...MuiDrawerProps.drawer(isDrawerMini)}>
          s
        </Drawer>
        <Box {...MuiMainProps(isDrawerMini)}>

        </Box>
      </Container>
    </React.StrictMode>
  )
}