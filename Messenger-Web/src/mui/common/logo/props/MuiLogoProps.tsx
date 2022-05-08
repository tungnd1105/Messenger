import {grey} from "@mui/material/colors";
import {BoxProps, StackProps, TypographyProps} from "@mui/material";

export const MuiLogoProps = {
  stack: {
    spacing: 1,
    direction: "row",
    alignItems: "center",
    justifyContent: "center",
  } as StackProps,

  icon: {
    width: "40px",
    height: "40px",
  } as BoxProps,

  typography: (isDefault: Boolean) => ({
    noWrap: true,
    fontSize: '32px',
    fontWeight: 500,
    textAlign: 'center',
    color: isDefault ? 'primary' : grey[50]
  }) as TypographyProps,

}