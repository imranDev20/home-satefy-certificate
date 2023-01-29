import { Container } from "@mui/material";
import React from "react";
import Heading from "../components/global/heading";
import Layout from "../components/global/layout";
import HorizontalNonLinearStepper from "../components/quote/stepper";

const Quote = () => {
  return (
    <Layout>
      <Container maxWidth="none" sx={{ mt: 7, maxWidth: 570 }}>
        <Heading sx={{ textAlign: "center", mb: 5 }}>Request a Quote</Heading>
        <HorizontalNonLinearStepper />
      </Container>
    </Layout>
  );
};

export default Quote;

export const Head = () => <title>Quote</title>;
