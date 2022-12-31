import { Container } from "@mui/material";
import React from "react";
import Layout from "../components/global/layout";
import HorizontalNonLinearStepper from "../components/quote/stepper";

const Quote = () => {
  return (
    <Layout>
      <Container maxWidth="none" sx={{ mt: 7, maxWidth: 700 }}>
        <HorizontalNonLinearStepper />
      </Container>
    </Layout>
  );
};

export default Quote;

export const Head = () => <title>Quote</title>;
