import React from 'react';
import ReactDOM from 'react-dom';
import {Theme} from "@assets/theme/Theme";
import LoginPage from "./pages/LoginPage";
import {CssBaseline, ThemeProvider} from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline/>
      <LoginPage/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);