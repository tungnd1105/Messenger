import React, {CSSProperties} from "react";
import {Theme} from "@app-mui/common/theme/Theme";
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai";
import {ButtonProps, DividerProps, IconButton, StackProps, TextFieldProps, TypographyProps} from "@mui/material";

const MuiLoginFormSxProps = {
  dividerSx: {
    width: '100%',
    fontSize: '14px',
    ":before": {top: '0'},
    ":after": {top: '0'},
    color: Theme.palette.secondary.main
  }
}

export const MuiLoginFormProps = {
  form: {
    width: "100%",
    height: "100%",
  } as CSSProperties,

  typography: {
    noWrap: true,
    fontSize: '16px',
    color: 'secondary',
    textAlign: 'center',
  } as TypographyProps,

  stack: {
    spacing: 2,
    width: '100%',
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  } as StackProps,

  divider: {
    sx: MuiLoginFormSxProps.dividerSx
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

  passwordField: () => {
    const [showPassword, setShowPassword] = React.useState(false);
    return {
      size: 'small',
      fullWidth: true,
      name: 'password',
      label: 'Password',
      variant: 'outlined',
      autoComplete: 'current-password',
      type: showPassword ? 'text' : 'password',
      sx: {marginBottom: Theme.spacing(2)},
      InputProps: {
        endAdornment: showPassword ?
          <IconButton color={'secondary'} onClick={() => setShowPassword(!showPassword)}>
            <AiFillEye size={20}/>
          </IconButton> :
          <IconButton color={'secondary'} onClick={() => setShowPassword(!showPassword)}>
            <AiFillEyeInvisible size={20}/>
          </IconButton>
      }
    } as TextFieldProps
  },

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