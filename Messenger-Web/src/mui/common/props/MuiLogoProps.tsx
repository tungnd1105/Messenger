import {BoxProps, StackProps, TypographyProps} from "@mui/material";

export const MuiLogoProps = {
  stack: {
    spacing: 1,
    wrap: "nowrap",
    direction: "row",
    alignItems: "center",
    justifyContent: "center",
  } as StackProps,

  icon: {
    sx: {
      width: "40px",
      height: "40px",
    }
  } as BoxProps,

  typography: {
    fontWeight: 500,
    noWrap: true,
    fontSize: "34px",
  } as TypographyProps,
}