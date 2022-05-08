import React from "react";
import {Formik} from "formik";
import {useLoginHook} from "@hooks/login/LoginHook";
import {Button, TextField, Typography} from "@mui/material";
import {LoginFormikProps} from "@app-mui/login/props/LoginFormikProps";
import {MuiLoginFormProps} from "@app-mui/login/props/MuiLoginFormProps";

export const MuiLoginForm: React.FunctionComponent = () => {

  const {handleLogin,error} = useLoginHook()

  return (
    <Formik onSubmit={data => handleLogin(data)} {...LoginFormikProps()}>
      {props => {
        const {handleSubmit, handleChange, errors, touched} = props
        return (
          <form style={{...MuiLoginFormProps.form}} onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              {...MuiLoginFormProps.usernameField}
              helperText={touched.username && errors.username}
              error={!!(errors.username && touched.username)}
            />
            <TextField
              onChange={handleChange}
              {...MuiLoginFormProps.passwordField()}
              error={!!(errors.password && touched.password)}
              helperText={touched.password && errors.password}
            />
            {error && <Typography mb={2} {...MuiLoginFormProps.typography} color={'error'}>
                Invalid username or password
            </Typography>}
            <Button {...MuiLoginFormProps.btnSignIn}>Sign in</Button>
          </form>
        )
      }}
    </Formik>
  )
}