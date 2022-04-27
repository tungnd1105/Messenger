import {CSSProperties} from "react";
import {deepPurple, grey} from "@mui/material/colors";
import {BoxProps, StackProps, TypographyProps} from "@mui/material";

export const MuiApp = {
  overlay: {
    content: '""',
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',
    backgroundColor: deepPurple[50],
  } as BoxProps,

  logo: (color?: "white" | "primary") => ({
    stack: {
      alignItems: 'center',
      justifyContent: 'center',
      direction: 'row',
    } as StackProps,

    text: {
      ml: 1,
      noWrap: true,
      fontSize: '30px',
      fontWeight: 500,
      color: color === "primary" ? "primary" : grey[50]
    } as TypographyProps,

    img: {
      width: '40px',
      height: '40px',
    } as CSSProperties
  })

}