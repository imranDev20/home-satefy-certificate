import React from "react";
import {
  ThemeProvider,
  createTheme,
  experimental_sx as sx,
} from "@mui/material/styles";

import { CssBaseline } from "@mui/material";
import Footer from "./footer";
import DrawerAppBar from "./drawer";
import Topbar from "./topbar";

export const theme = createTheme({
  typography: {
    fontSize: 17,
    fontFamily: [
      "Barlow Semi Condensed",
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
    },
  },
  palette: {
    primary: {
      light: "#ffa726",
      main: "#FF4B00",
      dark: "#ef6c00",
      contrastText: "rgba(255, 255, 255, 0.87)",
    },
    secondary: {
      light: "#ffa726",
      main: "#222222",
      dark: "#ef6c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    border: {
      main: "#ECECEE",
    },
    text: {
      main: "#888888",
    },

    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: sx({
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        }),
      },
      variants: [
        {
          props: { variant: "white" },
          style: sx({
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
          props: { variant: "orange-outlined" },
          style: sx({
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
          style: sx({
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
    MuiInputBase: {
      styleOverrides: {
        // Name of the slot
        root: sx({
          borderRadius: "0!important",
          "&:hover": {
            borderColor: "primary.main",
          },
        }),
        input: sx({
          padding: "9.8px 14px!important",

          "&:hover": {
            boxShadow: "none",
          },
        }),
      },
    },
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar />
      <DrawerAppBar>{children}</DrawerAppBar>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
