import React, {Component} from 'react';
import {MuiLogo} from "@app-mui/common/components/MuiLogo";
import {MuiLoginProps} from "@app-mui/login/props/MuiLoginProps";
import {MuiLoginForm} from "@app-mui/login/components/MuiLoginForm";
import {Box, Button, Card, Container, Divider, Grid, Stack} from "@mui/material";
import {MuiLoginFormProps} from "@app-mui/login/props/MuiLoginFormProps";

class MuiLogin extends Component {

  render() {
    return (
      <Container {...MuiLoginProps.container}>
        <Stack {...MuiLoginProps.stack}>
          <Box {...MuiLoginProps.box}>
            <Card {...MuiLoginProps.card}>
              <Grid {...MuiLoginProps.gird}>
                <Stack {...MuiLoginFormProps.stack}>
                  <MuiLogo isDefault={true}/>
                  <Divider {...MuiLoginFormProps.divider}>Sign in to Messenger</Divider>
                  <MuiLoginForm/>
                  <Divider {...MuiLoginFormProps.divider}> or </Divider>
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