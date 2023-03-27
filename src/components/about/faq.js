import { Container, Grid } from "@mui/material";
import React from "react";
import CustomizedAccordions from "./faq-accordion";

const Faq = () => {
  return (
    <Container sx={{ my: 7 }}>
      <Grid container spacing={3}>
        <Grid item md={6}></Grid>
        <Grid item md={6}>
          <CustomizedAccordions />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Faq;
