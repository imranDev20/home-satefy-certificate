import React from "react";
import Layout from "../components/global/layout";
import PageHeader from "../components/global/page-header";
import { graphql, useStaticQuery } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";

import Container from "@mui/material/Container";

function RequestQuote() {
  const data = useStaticQuery(graphql`
    query QuoteQuery {
      file(name: { eq: "about-bg" }) {
        id
        childImageSharp {
          gatsbyImageData
        }
      }

      prices: allStripePrice {
        nodes {
          id
          product {
            name
          }
          currency
          unit_amount
        }
      }
    }
  `);
  const image = data.file.childImageSharp.gatsbyImageData;
  const bgImage = convertToBgImage(image);

  return (
    <Layout>
      <PageHeader title="Request a Quote" bgImage={bgImage} />
      <Container
        maxWidth="sm"
        sx={{
          py: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        hello
      </Container>
    </Layout>
  );
}
export default RequestQuote;
