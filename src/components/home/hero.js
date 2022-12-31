import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Box component="section">
      <Container>
        <Grid container sx={{ height: "80vh" }}>
          <Grid
            item
            sm={6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
          >
            <Typography component="h4" variant="h6" color="primary">
              Welcome to Home Safety
            </Typography>
            <Typography component="h2" variant="h2" sx={{ fontWeight: 800 }}>
              We Are All About Home Repairs
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet consectetur adipi scing elit ut elit
              tellus luctus nec ullamcorper mattis pulvinar dapibus leoorem
              ipsum dolor sit amet consectetur adipi scing elit.
            </Typography>
            <Button variant="contained">Order Now</Button>
          </Grid>
          <Grid item sm={6}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
