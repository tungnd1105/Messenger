import React from "react";
import ReactDOM from "react-dom";
import {Theme} from "@app-mui/color/Theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import MuiLogin from "@app-mui/login/components/MuiLogin";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline/>
      <MuiLogin/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);