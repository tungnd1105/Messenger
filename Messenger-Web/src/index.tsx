import React from "react";
import ReactDOM from "react-dom";
import {CssBaseline} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import {ApolloProvider} from "@apollo/client";
import {Theme} from "@app-mui/common/theme/Theme";
import {client} from "@config/graphql/ClientGraphql";
import {AppRoutes} from "@config/router/AppRoutes";
import {BrowserRouter, history} from "@config/router/BrowserRouter";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={Theme}>
        <BrowserRouter history={history}>
          <CssBaseline/>
          <AppRoutes/>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);