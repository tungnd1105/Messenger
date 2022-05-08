import React from "react";
import {FiMenu} from "react-icons/fi";
import {useLayoutHook} from "@hooks/app/AppHook";
import {MuiBodyProps} from "@app-mui/app/props/MuiBodyProps";
import {MuiLogo} from "@app-mui/common/logo/components/MuiLogo";
import {MuiHeaderProps} from "@app-mui/app/props/MuiHeaderProps";
import {AppBar, Box, Container, Drawer, IconButton, Stack, Toolbar} from "@mui/material";

export const MuiApp: React.FunctionComponent = () => {
  const {toggleDrawer,isDrawerOpen} = useLayoutHook()
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
       <Drawer {...MuiBodyProps.drawer({open:isDrawerOpen})}>
         s
       </Drawer>
        <Box {...MuiBodyProps.main(isDrawerOpen)}>
          s
        </Box>
      </Container>
    </React.StrictMode>
  )
}