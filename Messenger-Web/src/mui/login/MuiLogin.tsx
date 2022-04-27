import bgImg from "@assets/images/bg2.jpg";
import {deepPurple, grey} from "@mui/material/colors";
import {BoxProps, ButtonProps, CardProps, ContainerProps, GridProps, StackProps, TextFieldProps} from "@mui/material";


export const MuiLogin = {
  container: {
    fixed: true,
    disableGutters: true,
    maxWidth: 'xl'
  } as ContainerProps,

  stack: {
    padding: '30px',
    height: '100vh',
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  } as StackProps,

  box: {
    width: "1000px",
    height: "1000px",
    alignItems: "center"
  } as BoxProps,

  card: {
    sx: {
      width: "100%",
      height: "100%",
      padding: "0px",
      borderRadius: '15px',
    }
  } as CardProps,

  gridContainer: {
    xl: 12,
    height: '100%',
    container: true,
    direction: 'row'
  } as GridProps,

  girdItemLeft: {
    xl: 5,
    item: true,
    container: true,
    padding: '40px',
    direction: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    sx: {
      backgroundImage: `url(${bgImg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }
  } as GridProps,

  gridItemRight: {
    xl: 7,
    item: true,
    padding: '40px',
    container: true,
    sx: {
      direction: "column",
      justifyContent: "center",
      alignItems: "center",
    }
  } as GridProps,

  btnSignIn: {
    variant: 'outlined',
    size: 'small',
    sx: {
      color: grey[50],
      fontSize: '14px',
      borderRadius: '10px',
      textTransform: "initial",
      borderColor: grey[50],
      '&:hover': {
        borderColor: deepPurple[500],
      }
    }
  } as ButtonProps
}

export const MuiLoginForm = {

  gridItem: {
    xl: 8,
    item: true,
  },

  usernameField: {
    size: 'small',
    type: 'text',
    fullWidth: true,
    label: 'Username',
    name: 'username',
    variant: 'outlined',
  } as TextFieldProps,

  passwordField: {
    size: 'small',
    type: 'password',
    fullWidth: true,
    label: 'Password',
    name: 'password',
    variant: 'outlined',
  } as TextFieldProps,

  btnSignIn: {
    size: 'small',
    type: 'submit',
    fullWidth: true,
    color: 'primary',
    variant: 'contained',
    sx:{
      textTransform:'initial',
    },
  } as ButtonProps,

  btnForgotPassword: {
    variant: 'outlined',
    fullWidth: true,
    size: 'small',
    color: 'primary',
    sx:{
      textTransform:'initial',
    },
  } as ButtonProps,

  divider:{
   sx:{
     fontSize: '14px',
   }
  }

}