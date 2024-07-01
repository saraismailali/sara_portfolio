import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import React, { useMemo } from "react";
import { darkTheme, lightTheme } from "../themes";
import { Mode } from "../types";

import { useChangeMode } from "../hooks/useChangeMode";

interface ThemeProviderProps {}

export const ThemeProvider = (
  props: React.PropsWithChildren<ThemeProviderProps>
) => {
  const { children } = props;

  const [mode] = useChangeMode();

  const theme = useMemo(
    () => createTheme(mode === Mode.dark ? darkTheme : lightTheme, {}),
    [mode]
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
