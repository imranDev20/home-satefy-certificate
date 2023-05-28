import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";

import About from "../components/about/about";
import Faq from "../components/about/faq";
import Layout from "../components/global/layout";
import PageHeader from "../components/global/page-header";
import Cta from "../components/about/cta";

const AboutPage = () => {
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
      <PageHeader title="About" bgImage={bgImage} />
      <About />
      <Cta />
      <Faq />
    </Layout>
  );
};

export default AboutPage;

export const Head = () => (
  <>
    <title>
      Meet the Experts in Landlord Safety Certifications | Home Safety Cert
    </title>
    <meta
      name="title"
      content="About Us | Safety and Compliance Experts | Home Safety Cert"
    />
    <meta
      name="description"
      content="Discover Home Safety Cert's commitment to safety and service. Learn more about our team and how we can help you with safety certifications today."
    />
  </>
);
