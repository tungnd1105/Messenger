import bg from "@assets/images/bg.jpg"
import {BoxProps, CardProps, ContainerProps, GridProps, StackProps, SxProps} from "@mui/material";

const MuiLoginSxProps = {
  containerSx: {
    ':before': {
      zIndex: -1,
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
      content: "''",
      position: "absolute",
      backgroundSize: "cover",
      backgroundImage: `url(${bg})`,
    }
  } as SxProps,
  cardSx: {
    width: "100%",
    height: "100%",
    padding: "30px",
    borderRadius: '15px',
    position: "relative"
  } as SxProps
}

export const MuiLoginProps = {
  container:{
    fixed: true,
    maxWidth: "sm",
    disableGutters: true,
    sx: MuiLoginSxProps.containerSx
  } as ContainerProps,

  stack: {
    padding: '30px',
    height: '100vh',
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  } as StackProps,

  grid: {
    xl: 12,
    item: true,
    height: "100%",
    container: true,
    direction: 'column',
    alignItems: "center",
    justifyContent: "center",
  } as GridProps,

  box: {
    height: "80%",
    width: {
      xs: '100%', sm: '70%',
      md: '70%', lg: '70%', xl: '70%'
    }
  } as BoxProps,

  card:{
    sx: MuiLoginSxProps.cardSx
  } as CardProps

}