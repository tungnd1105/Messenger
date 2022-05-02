import {CSSProperties} from "react";
import {Theme} from "@app-mui/color/Theme";
import {ButtonProps, DividerProps, StackProps, TextFieldProps, TypographyProps} from "@mui/material";

export const MuiLoginFormProps = {

  form: {
    width: "100%",
    height: "100%",
  } as CSSProperties,

  typography: {
    noWrap: true, fontSize: '16px', color: 'secondary'
  } as TypographyProps,

  stack: {
    spacing: 2,
    width: '100%',
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  } as StackProps,

  divider: {
    sx: {
      width: '100%',
      fontSize: '14px',
      ":before": {top: '0'},
      ":after": {top: '0'},
      color: Theme.palette.secondary.main
    }
  } as DividerProps,

  usernameField: {
    type: 'text',
    size: 'small',
    fullWidth: true,
    name: 'username',
    label: 'Username',
    variant: 'outlined',
    autoComplete: 'current-username',
    sx: {marginBottom: Theme.spacing(2)},
  } as TextFieldProps,

  passwordField: {
    size: 'small',
    type: 'password',
    fullWidth: true,
    name: 'password',
    label: 'Password',
    variant: 'outlined',
    autoComplete: 'current-password',
    sx: {marginBottom: Theme.spacing(2)},
  } as TextFieldProps,

  btnSignUp: {
    size: "small",
    type: "button",
    color: "primary",
    fullWidth: true,
    variant: "outlined",
    sx: {fontSize: '14px', textTransform: "initial"}
  } as ButtonProps,

  btnSignIn: {
    size: "small",
    type: "submit",
    color: "primary",
    fullWidth: true,
    variant: "contained",
    sx: {fontSize: '14px', textTransform: "initial"}
  } as ButtonProps

}