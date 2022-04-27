import React from "react";
import {Formik} from "formik";
import {MuiApp} from "@app-mui/app/MuiApp";
import logo from "@assets/images/logo-primary.png";
import {LoginFormik} from "@views/login/LoginFormik";
import {MuiLoginForm} from "@app-mui/login/MuiLogin";
import {Button, Divider, Grid, Stack, TextField, Typography} from "@mui/material";

export const LoginForm: React.FC = () => {

  return (
    <Grid {...MuiLoginForm.gridItem}>
      <Formik {...LoginFormik} onSubmit={data => {}} >
        {props => {
          const {handleSubmit, handleChange, errors, touched} = props
          return (
            <form onSubmit={handleSubmit}>
              <Stack direction={'column'} spacing={2}>
                <Stack {...MuiApp.logo().stack}>
                  <img alt={""} src={logo} style={{...MuiApp.logo("primary").img}}/>
                  <Typography {...MuiApp.logo("primary").text}>Messenger</Typography>
                </Stack>
                <Divider {...MuiLoginForm.divider}>Sign in to Messenger</Divider>

                <TextField
                  onChange={handleChange}
                  {...MuiLoginForm.usernameField}
                  error={!!(errors.username && touched.username != null)}
                  helperText={errors.username && touched.username ? `${errors.username}` : null}
                />
                <TextField
                  onChange={handleChange}
                  {...MuiLoginForm.passwordField}
                  error={!!(errors.password && touched.password != null)}
                  helperText={errors.password && touched.password ? `${errors.password}` : null}
                />

                <Button {...MuiLoginForm.btnSignIn}> Sign in </Button>
                <Button {...MuiLoginForm.btnForgotPassword}>Forgot password ?</Button>
                <Divider {...MuiLoginForm.divider}>Or sign in with</Divider>
              </Stack>
            </form>
          )
        }}
      </Formik>
    </Grid>
  )
}