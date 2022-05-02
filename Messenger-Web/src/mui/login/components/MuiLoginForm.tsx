import React from "react";
import {Formik} from "formik";
import {Button, TextField} from "@mui/material";
import {LoginFormikProps} from "@app-mui/login/props/LoginFormikProps";
import {MuiLoginFormProps} from "@app-mui/login/props/MuiLoginFormProps";

export const MuiLoginForm: React.FunctionComponent = () => {

  return (
    <Formik {...LoginFormikProps()}>
      {props => {
        const {handleSubmit, handleChange, errors, touched} = props
        return (
          <form style={{...MuiLoginFormProps.form}} onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              helperText={errors.username}
              {...MuiLoginFormProps.usernameField}
              error={!!(errors.username && touched.password)}
            />
            <TextField
              onChange={handleChange}
              helperText={errors.password}
              {...MuiLoginFormProps.passwordField}
              error={!!(errors.password && touched.password)}
            />
            <Button {...MuiLoginFormProps.btnSignIn}>Sign in</Button>
          </form>
        )
      }}
    </Formik>
  )
}