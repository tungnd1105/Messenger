import React from "react";
import ReactDOM from "react-dom";
import LoginPages from "@views/login";
import {Theme} from "@app-mui/app/MUITheme";
import {CssBaseline, ThemeProvider} from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <CssBaseline/>
      <LoginPages/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);