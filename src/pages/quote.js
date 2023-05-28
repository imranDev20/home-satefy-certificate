import React from "react";
import Layout from "../components/global/layout";
import HorizontalLinearStepper from "../components/quote/stepper";

const Quote = () => {
  return (
    <Layout>
      <HorizontalLinearStepper />
    </Layout>
  );
};

export default Quote;

export const Head = () => (
  <>
    <title>
      Get a Quick Quote for Safety Certifications | Home Safety Cert
    </title>

    <meta
      name="title"
      content="Quick and Easy Safety Certification Quotes | Home Safety Cert"
    />
    <meta
      name="description"
      content="Get a quote for your safety certifications with Home Safety Cert. We offer Gas Safety Certificates, Electrical Certifications, EPCs, and more. Contact us for a hassle-free quote."
    />
  </>
);
