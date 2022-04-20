import React from "react";
import ReactDOM from "react-dom";
import {Theme} from "@assets/theme/Theme";
import {BrowserRouter} from "react-router-dom";
import {AppRouter} from "@app/router/AppRouter";
import {CssBaseline, ThemeProvider} from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <CssBaseline/>
        <AppRouter/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);