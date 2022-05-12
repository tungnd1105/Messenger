import {ContainerProps, SxProps} from "@mui/material";

export const MuiBodySxProps = {
 containerSx:{
   display: "flex",
 } as SxProps,
}

export const MuiBodyProps = {
  container: {
    maxWidth: "xl",
    fixed: true,
    disableGutters: true,
    sx: MuiBodySxProps.containerSx,
  } as ContainerProps
}