import {createTheme} from "@mui/material";
import {amber, green, grey, lightBlue, red} from "@mui/material/colors";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const Theme = createTheme({
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    primary: {
      main: lightBlue["A700"],
      light: lightBlue[500],
      dark: lightBlue[900]
    },
    success: {
      main: green[600],
      light: green[100],
      dark: green[900]
    },
    warning: {
      main: amber[600],
      light: amber[100],
      dark: amber[900]
    },
    error: {
      main: red[600],
      light: red[100],
      dark: red[900]
    },
    secondary: {
      main: grey[500]
    },
    background: {
      default: grey[100]
    }
  }
})