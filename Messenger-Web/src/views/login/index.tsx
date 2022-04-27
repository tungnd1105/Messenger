import React, {Component} from 'react';
import {MuiApp} from "@app-mui/app/MuiApp";
import {MuiLogin, MuiLoginForm} from "@app-mui/login/MuiLogin";
import {Box, Button, Card, Container, Grid, Stack, TextField, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {LoginForm} from "@views/login/LoginForm";

class LoginPages extends Component {
  render() {
    return (
      <Container {...MuiLogin.container}>
        <Box {...MuiApp.overlay}/>
        <Stack {...MuiLogin.stack}>
          <Box {...MuiLogin.box}>
            <Card {...MuiLogin.card}>
              <Grid {...MuiLogin.gridContainer}>
                <Grid {...MuiLogin.girdItemLeft}>
                  <Typography color={grey[50]} fontSize={'40px'} fontWeight={500}>
                    Messenger
                  </Typography>
                  <Typography color={grey[50]} mb={2} fontSize={'16px'}>
                    Sign in to your account or create new
                  </Typography>
                  <Button {...MuiLogin.btnSignIn}>Sign up</Button>
                </Grid>
                <Grid {...MuiLogin.gridItemRight}>
                 <LoginForm/>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Stack>
      </Container>
    );
  }
}

export default LoginPages;