import React from "react";
import {logoStyle} from "@assets/style/app.styles";
import imgLogoBlue from "@assets/images/logo-blue.png";
import imgLogoWhite from "@assets/images/logo-white.png";
import {Box, LinearProgress, Stack, Typography, TypographyProps} from "@mui/material";

export const Logo = (props?: TypographyProps) => {
  const imgPath = props.color === "primary" ? imgLogoBlue : imgLogoWhite
  return (
    <Stack direction="row" alignItems="center" spacing={1} justifyContent="center">
      <img src={imgPath} style={logoStyle.img} alt="logo"/>
      <Typography {...props} sx={logoStyle.text}>
        Messenger
      </Typography>
    </Stack>
  )
}

export const LazyLoading = () => <Box width={"100%"}>
  <LinearProgress color="primary"/>
</Box>