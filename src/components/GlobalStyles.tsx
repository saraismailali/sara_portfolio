import { GlobalStyles as MuiGlobalStyles, useTheme } from "@mui/material";
import React from "react";

export interface GlobalStylesProps {}

export const GlobalStyles: React.FC<GlobalStylesProps> = () => {
  const theme = useTheme();

  return (
    <MuiGlobalStyles
      styles={{
        "*": {
          direction: "ltr",
        },
        /* Scrollbar styles */
        "::-webkit-scrollbar": {
          width: "12px",
        },
        "::-webkit-scrollbar-track": {
          background: theme.palette.grey[300],
        },
        "::-webkit-scrollbar-thumb": {
          background: theme.palette.primary.main,
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: theme.palette.primary.dark,
        },
        /* Selection styles */
        "::selection": {
          background: theme.palette.primary.dark,
          color: theme.palette.common.white,
        },
        "::-moz-selection": {
          background: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        },
      }}
    />
  );
};
