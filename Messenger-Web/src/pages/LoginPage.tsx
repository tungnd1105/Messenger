import React, {Component} from 'react';
import {Logo} from "@components/common/Common";
import {loginStyles} from "@assets/style/login.style";
import pathImgBanner from "@assets/images/Online world-pana.svg"
import {Box, Button, Card, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import {LoginForm} from "@features/login/LoginForm";
import {Navigate} from "react-router-dom";

class LoginPage extends Component {

  render() {

    if (localStorage.getItem("accessToken")){
      return <Navigate to={'/'}/>
    }

    return (
      <Container disableGutters fixed maxWidth="xl" sx={loginStyles.container}>
        <Stack sx={loginStyles.stack}>
          <Box sx={loginStyles.box}>
            <Card sx={loginStyles.card}>

              <Grid container xl={12} sx={loginStyles.girdContainer}>
                <Grid item xl={7} sx={loginStyles.gridItemLeft}>
                  <Logo color="primary"/>
                  <Typography mb={5} color="secondary" sx={loginStyles.typography}>
                    Start your conversation with your friends
                  </Typography>
                  <img src={pathImgBanner} style={loginStyles.imgBanner} alt=""/>
                </Grid>

                <Grid item xl={5} sx={loginStyles.gridItemRight}>
                  <Divider textAlign="center">
                    <Typography color="secondary" sx={loginStyles.typography}>Sign in your account to continue</Typography>
                  </Divider>

                  <LoginForm/>

                  <Divider textAlign="center">
                    <Typography sx={loginStyles.typography} color="secondary"> Or </Typography>
                  </Divider>

                  <Stack direction="row" justifyContent={"space-between"} spacing={1}>
                    <Button variant="text" color="primary" size="small">
                      <Typography sx={loginStyles.typography}>Create new account?</Typography>
                    </Button>
                    <Button variant="text" color="primary" size="small">
                      <Typography sx={loginStyles.typography}>Forgot password?</Typography>
                    </Button>
                  </Stack>

                </Grid>
              </Grid>
            </Card>
          </Box>
        </Stack>
      </Container>
    );
  }
}

export default LoginPage;