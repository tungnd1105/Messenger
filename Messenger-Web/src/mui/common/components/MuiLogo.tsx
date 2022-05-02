import React from "react";
import {grey} from "@mui/material/colors";
import logoWhite from "@assets/images/logo-white.png"
import logoPrimary from "@assets/images/logo-primary.png"
import {Box, BoxProps, Stack, Typography} from "@mui/material";
import {MuiLogoProps} from "@app-mui/common/props/MuiLogoProps";

export const MuiLogo:React.FunctionComponent = (props?: BoxProps, isDefault?: Boolean) => {
  return (
    <Stack {...MuiLogoProps.stack}>
      <Box component="img" src={isDefault ? logoPrimary : logoWhite} {...MuiLogoProps.icon}/>
      <Typography {...MuiLogoProps.typography} color={isDefault ? "primary" : grey[50]}>Messenger</Typography>
    </Stack>
  )
}