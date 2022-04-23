import React from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import {useLogin} from "@services/auth/AuthHook";
import {loginStyles} from "@assets/style/login.style";
import {Button, Grid, Typography} from "@mui/material";
import {LoginFormFields} from "@features/login/LoginFormFields";

export const LoginForm = () => {

  const {handleLogin, error} = useLogin()
  const initialValues = {username: '', password: ''};
  const validationSchema = Yup.object().shape({
    username: Yup.string().trim().required("*username required"),
    password: Yup.string().trim().required("*password required")
  });

  return (
    <Formik
      enableReinitialize validateOnChange
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={data => handleLogin(data)}>
      {props => {
        const {handleSubmit, handleChange, errors, touched} = props
        return (
          <form onSubmit={handleSubmit}>
            <LoginFormFields errors={errors} touched={touched} onChange={handleChange}/>
            {error && error.message.match("Unauthorized") &&
              <Typography color="error" mt={2} sx={loginStyles.typography}> invalid username or password</Typography>
            }
            <Grid item xs={12} mt={2} mb={2} sm={12} md={12} lg={12} xl={12}>
              <Button type="submit" fullWidth size="small" variant="contained" color="primary">
                Sign-in
              </Button>
            </Grid>

          </form>
        )
      }}
    </Formik>
  )
}