import React, {Component} from 'react';
import {Navigate} from "react-router-dom";
import {MuiLoginProps} from "@app-mui/login/props/MuiLoginProps";
import {MuiLogo} from "@app-mui/common/logo/components/MuiLogo";
import {MuiLoginFormProps} from "@app-mui/login/props/MuiLoginFormProps";
import {Box, Button, Card, Container, Divider, Grid, Stack} from "@mui/material";
import {MuiLoginForm} from "@app-mui/login/components/MuiLoginForm";

class MuiLogin extends Component {

  render() {
    if (localStorage.getItem("accessToken")){
      return <Navigate to={'/'}/>
    }
    return (
      <Container {...MuiLoginProps.container}>
        <Stack {...MuiLoginProps.stack}>
          <Box {...MuiLoginProps.box}>
            <Card {...MuiLoginProps.card}>
              <Grid {...MuiLoginProps.grid}>
                <Stack {...MuiLoginFormProps.stack}>
                  <MuiLogo isDefault={true}/>
                  <Divider {...MuiLoginFormProps.divider}>Sign in to messenger</Divider>
                  <MuiLoginForm/>
                  <Button {...MuiLoginFormProps.btnSignUp}>Sign up</Button>
                </Stack>
              </Grid>
            </Card>
          </Box>
        </Stack>
      </Container>
    );
  }
}

export default MuiLogin;