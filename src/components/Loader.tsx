import {
  alpha,
  Box,
  CircularProgress,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

export interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "fixed",
        zIndex: theme.zIndex.drawer + 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: alpha(theme.palette.background.default, 0.95),
        backdropFilter: "blur(5px)",
      }}
    >
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={theme.palette.primary.dark} />
            <stop offset="100%" stopColor={theme.palette.primary.main} />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        size={100}
        sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
      />
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "cursive",
          color: theme.palette.primary.dark,
          textShadow: `${theme.spacing(0.5)} ${theme.spacing(0.5)} ${theme.spacing(1)} ${alpha(theme.palette.primary.dark, 0.8)}`,
        }}
      >
        Loading...
      </Typography>
    </Box>
  );
};
