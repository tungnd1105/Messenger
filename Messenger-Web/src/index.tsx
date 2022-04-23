import React from "react";
import ReactDOM from "react-dom";
import {Theme} from "@assets/theme/Theme";
import {AppRouter} from "@router/AppRouter";
import {ApolloProvider} from "@apollo/client";
import {BrowserRouter} from "react-router-dom";
import {client} from "@services/graphql/Graphql";
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