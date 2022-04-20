import React from "react";
import {Stack, Typography, TypographyProps} from "@mui/material";
import imgLogoBlue from "@assets/images/logo-blue.png";
import imgLogoWhite from "@assets/images/logo-white.png";
import {useLogoStyles} from "@assets/style/app.styles";

export const Logo = (props?: TypographyProps) => {

  const {img,text} = useLogoStyles()
  const imgPath = props.color === "primary" ? imgLogoBlue : imgLogoWhite

  return (
    <Stack direction="row" alignItems="center" spacing={1} justifyContent="center">
      <img src={imgPath} style={img} alt="logo"/>
      <Typography {...props} sx={text}>
        Messenger
      </Typography>
    </Stack>
  )
}
