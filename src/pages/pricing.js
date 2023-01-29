import { graphql, useStaticQuery } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import React from "react";
import Layout from "../components/global/layout";
import PageHeader from "../components/global/page-header";
import Pricing from "../components/home/pricing";
import PricingTable from "../components/pricing/pricing-table";

const PricingPage = () => {
  const background = useStaticQuery(graphql`
    query AboutBgQuery {
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
