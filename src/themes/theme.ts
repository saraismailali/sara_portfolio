import { ThemeOptions } from "@mui/material";

export const darkTheme: ThemeOptions = {
  palette: {
    background: {
      default: "#181818",
      paper: "#2c2c2c",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    mode: "dark",
    primary: {
      contrastText: "#ffffff",
      dark: "#aa245a",
      light: "#784368",
      main: "#aa7b7b",
    },
    secondary: {
      contrastText: "#ffffff",
      dark: "#6a1b9a",
      light: "#9c4dcc",
      main: "#8e24aa",
    },
  },
  shape: {
    borderRadius: 25,
  },
};

export const lightTheme: ThemeOptions = {
  palette: {
    background: {
      default: "#fef7ff",
      paper: "#BB8493",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    mode: "light",
    primary: {
      contrastText: "#ffffff",
      dark: "#704264",
      light: "#49243E",
      main: "#e3b9b9",
    },
    secondary: {
      contrastText: "#ffffff",
      dark: "#e65100",
      light: "#ff9800",
      main: "#ff5722",
    },
  },
  shape: {
    borderRadius: 25,
  },
};
