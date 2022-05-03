import React from "react";
import ReactDOM from "react-dom";
import {Theme} from "@app-mui/color/Theme";
import {ApolloProvider} from "@apollo/client";
import {client} from "@app/graphql/AppGraphql";
import {AppRouter} from "@app/router/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <CssBaseline/>
          <AppRouter/>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);