import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsClockFill,
} from "react-icons/bs";
import { theme } from "./layout";

const Topbar = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item container sm={7}>
            <Link
              underline="none"
              component="a"
              href="tel:+1-2345-6789-101"
              sx={{
                pr: 3,
                py: 1.5,
                fontSize: 15,
                color: "white",
                display: "flex",
                alignItems: "center",
                transition: "200ms color ease",
                "&:hover": {
                  color: "secondary.main",
                },
              }}
            >
              <BsFillTelephoneFill
                style={{ marginRight: 5, color: theme.palette.secondary.main }}
              />
              +1-2345-6789-101
            </Link>
            <Link
              underline="none"
              sx={{
                px: 3,
                py: 1.5,
                borderLeft: "1px solid",
                borderLeftColor: "#2E6389",
                transition: "200ms color ease",
                color: "white",
                fontSize: 15,
                display: "flex",
                alignItems: "center",
                transition: "200ms color ease",
                "&:hover": {
                  color: "secondary.main",
                },
              }}
            >
              <BsFillEnvelopeFill
                style={{ marginRight: 5, color: theme.palette.secondary.main }}
              />
              info@example.com
            </Link>
            <Typography
              underline="none"
              sx={{
                px: 3,
                py: 1.5,
                color: "white",
                borderLeft: "1px solid",
                borderLeftColor: "#2E6389",
                fontSize: 15,
                display: "flex",
                alignItems: "center",
                transition: "200ms color ease",
              }}
            >
              <BsClockFill
                style={{ marginRight: 5, color: theme.palette.secondary.main }}
              />
              Monday-Friday: 10:00-19:00
            </Typography>
          </Grid>
          <Grid item sm={1}></Grid>
          <Grid item container sm={4} display="flex" justifyContent="flex-end">
            <Link
              href="#"
              sx={{
                px: 2,
                py: 1.5,
                color: "white",
                borderRight: "1px solid",
                borderRightColor: "#2E6389",
                borderLeft: "1px solid",
                borderLeftColor: "#2E6389",
                transition: "200ms color ease",
                "&:hover": {
                  color: "secondary.main",
                },
              }}
            >
              <BsFacebook fontSize={14} />
            </Link>
            <Link
              href="#"
              sx={{
                px: 2,
                py: 1.5,
                color: "white",
                borderRight: "1px solid",
                borderRightColor: "#2E6389",
                transition: "200ms color ease",
                "&:hover": {
                  color: "secondary.main",
                },
              }}
            >
              <BsInstagram fontSize={14} />
            </Link>
            <Link
              href="#"
              sx={{
                px: 2,
                py: 1.5,
                color: "white",
                borderRight: "1px solid",
                borderRightColor: "#2E6389",
                transition: "200ms color ease",
                "&:hover": {
                  color: "secondary.main",
                },
              }}
            >
              <BsTwitter fontSize={14} />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Topbar;
