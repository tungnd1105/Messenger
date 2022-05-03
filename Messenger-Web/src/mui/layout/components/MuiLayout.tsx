import React, {Component} from 'react';
import {Container} from "@mui/material";
import {MuiHeader} from "@app-mui/layout/components/MuiHeader";
import {MuiLayoutProps} from "@app-mui/layout/props/MuiLayoutProps";

class MuiLayout extends Component {

  render() {
    return (
      <Container {...MuiLayoutProps.container}>
        <MuiHeader/>
      </Container>
    );
  }
}

export default MuiLayout;