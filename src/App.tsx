import { CssBaseline } from "@mui/material";
import { GlobalStyles, Layout } from "./components";
import { StoreProvider, ThemeProvider } from "./providers";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "atropos/css";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
  ]);
  return (
    <StoreProvider>
      <ThemeProvider>
        <GlobalStyles />
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StoreProvider>
  );
}
