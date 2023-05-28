import { graphql, useStaticQuery } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import React from "react";
import Layout from "../components/global/layout";
import PageHeader from "../components/global/page-header";
import Pricing from "../components/home/pricing";
import PricingTable from "../components/pricing/pricing-table";

const PricingPage = () => {
  const background = useStaticQuery(graphql`
    query PricingBgQuery {
      file(name: { eq: "about-bg" }) {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const image = background.file.childImageSharp.gatsbyImageData;
  const bgImage = convertToBgImage(image);

  return (
    <Layout>
      <PageHeader title="Pricing" bgImage={bgImage} />
      <PricingTable />
    </Layout>
  );
};

export default PricingPage;

export const Head = () => (
  <>
    <title>Affordable Safety Certification Pricing | Home Safety Cert</title>
    <meta name="title" content="Affordable Pricing Plans | Home Safety Cert" />
    <meta
      name="description"
      content="Discover our affordable pricing plans for property safety certification and compliance. Book now and ensure your property is up to code with Home Safety Cert."
    />
  </>
);
