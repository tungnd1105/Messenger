import React from "react";
import logoBlue from '@assets/images/logoBlue.png'
import logoWhite from '@assets/images/logoWhite.png'
import {Box, BoxProps, Stack, Typography} from "@mui/material";
import {MuiLogoProps} from "@app-mui/common/logo/props/MuiLogoProps";

export interface LogoProps extends BoxProps{
  isDefault?: boolean;
}

export const MuiLogo:React.FunctionComponent<LogoProps> = (props?:LogoProps) => {
  return(
    <Stack {...MuiLogoProps.stack}>
      <Box component={'img'} src={props.isDefault ? logoBlue : logoWhite} {...MuiLogoProps.icon}/>
      <Typography {...MuiLogoProps.typography(props.isDefault)}> Messenger</Typography>
    </Stack>
  )
}