import { Box, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Topbar = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 1,
        borderBottom: "1px solid",
        borderBottomColor: "border.main",
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item container sm={6} fontSize={15}>
            <Link
              underline="none"
              color="secondary"
              component="a"
              href="tel:+1-2345-6789-101"
              sx={{
                pr: 3,

                transition: "200ms color ease",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              +1-2345-6789-101
            </Link>
            <Link
              underline="none"
              color="secondary"
              sx={{
                px: 3,
                borderLeft: "1px solid",
                borderLeftColor: "border.main",
                transition: "200ms color ease",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              info@example.com
            </Link>
            <Typography
              underline="none"
              color="secondary"
              sx={{
                px: 3,
                borderLeft: "1px solid",
                borderLeftColor: "border.main",
              }}
            >
              Monday-Friday: 10:00-19:00
            </Typography>
          </Grid>
          <Grid item sm={1}></Grid>
          <Grid item container sm={5} display="flex" justifyContent="flex-end">
            <Link
              href="#"
              color="secondary"
              sx={{
                px: 3,
                borderRight: "1px solid",
                borderRightColor: "border.main",
                transition: "200ms color ease",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <BsFacebook />
            </Link>
            <Link
              href="#"
              color="secondary"
              sx={{
                px: 3,
                borderRight: "1px solid",
                borderRightColor: "border.main",
                transition: "200ms color ease",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <BsInstagram />
            </Link>
            <Link
              href="#"
              color="secondary"
              sx={{
                pl: 3,
                transition: "200ms color ease",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <BsTwitter />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Topbar;
