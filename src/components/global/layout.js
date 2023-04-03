import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { CssBaseline } from "@mui/material";
import Footer from "./footer";
import DrawerAppBar from "./drawer";
import Topbar from "./topbar";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "Jost",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    body2: {
      fontSize: 16,
      lineHeight: 1.8,
      letterSpacing: ".3px",
      color: "#888888",
    },
  },
  palette: {
    primary: {
      light: "#ffa726",
      main: "#004975",
      dark: "#ef6c00",
      contrastText: "rgba(255,255,255, 1)",
    },
    secondary: {
      light: "#ffa726",
      main: "#F7C355",
      dark: "#ef6c00",
      // contrastText: "rgba(0, 0, 0, 0.87)",
      contrastText: "rgba(255,255,255, 1)",
    },
    black: {
      light: "#ffa726",
      main: "#222222",
      dark: "#ef6c00",
      // contrastText: "rgba(0, 0, 0, 0.87)",
      contrastText: "rgba(255,255,255, 1)",
    },

    border: {
      main: "#F1F1F1",
    },
    text: {
      main: "#888888",
    },
    background: {
      main: "#F7F7F7",
    },

    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) =>
          theme.unstable_sx({
            boxShadow: "none",
            "&:hover": {
              boxShadow: "none",
            },
          }),
      },
      variants: [
        {
          props: { variant: "white" },
          style: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 0,
              bgcolor: "white",
              color: "primary.main",
              "&:hover": {
                bgcolor: "primary.main",
                color: "white",
              },
              px: 3,
              py: 1,
            }),
        },
        {
          props: { variant: "blue" },
          style: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 20,
              py: 1.3,
              px: 3,
              fontSize: 13,
              bgcolor: "primary.main",
              fontWeight: 600,
              color: "white",
              "&:hover": {
                bgcolor: "secondary.main",
              },
            }),
        },
        {
          props: { variant: "yellow" },
          style: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 20,
              py: 1.3,
              px: 3,
              fontSize: 13,
              bgcolor: "secondary.main",
              fontWeight: 600,
              color: "white",
              "&:hover": {
                bgcolor: "primary.main",
              },
            }),
        },
        {
          props: { variant: "blue-outlined" },
          style: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 20,
              py: 1.3,
              px: 3,
              fontSize: 13,
              bgcolor: "white",
              fontWeight: 600,
              color: "primary.main",
              border: "1px solid",
              borderColor: "primary.main",
              "&:hover": {
                color: "white",
                bgcolor: "primary.main",
              },
            }),
        },
        {
          props: { variant: "orange-outlined" },
          style: ({ theme }) =>
            theme.unstable_sx({
              borderRadius: 0,
              bgcolor: "white",
              border: "1px solid",
              borderColor: "primary.main",
              color: "primary.main",
              "&:hover": {
                bgcolor: "primary.main",
                color: "white",
              },
              px: 3,
              py: 1,
            }),
        },
        {
          props: { variant: "black-text" },
          style: ({ theme }) =>
            theme.unstable_sx({
              p: 0,
              color: "secondary.main",
              "&:hover": {
                backgroundColor: "transparent",
                color: "primary.main",
              },
            }),
        },
      ],
    },
    MuiFormHelperText: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) =>
          theme.unstable_sx({
            fontSize: 16,
          }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) =>
          theme.unstable_sx({
            backgroundColor: "white",
            "&:hover": {
              borderColor: "primary.main",
            },
          }),
        input: ({ theme }) =>
          theme.unstable_sx({
            "&:hover": {
              boxShadow: "none",
            },
          }),
      },
    },
  },
});

const Layout = ({ children, location }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar />
      <DrawerAppBar location={location}>{children}</DrawerAppBar>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
