import bgContent from "@assets/images/bg2.jpg";
import {BoxProps, CardProps, ContainerProps, GridProps, StackProps} from "@mui/material";

export const MuiLoginProps = {
  container: {
    fixed: true,
    maxWidth: "sm",
    disableGutters: true,
    sx: {
      ":before": {
        content: "''",
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${bgContent})`,
      }
    }
  } as ContainerProps,

  stack: {
    padding: '30px',
    height: '90vh',
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  } as StackProps,

  box: {
    width: {
      xs: '100%',
      sm: '70%',
      md: '70%',
      lg: '70%',
      xl: '70%'
    }
  } as BoxProps,

  card: {
    sx: {
      padding: "20px",
      borderRadius: '15px'
    }
  } as CardProps,

  gird: {
    xl: 12,
    item: true,
    height: "100%",
    container: true,
    direction: 'column',
    alignItems: "center",
    justifyContent: "start",
  } as GridProps
}
