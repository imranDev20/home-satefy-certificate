import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";

import About from "../components/about/about";
import Faq from "../components/about/faq";
import Layout from "../components/global/layout";
import PageHeader from "../components/global/page-header";

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
      <Faq />
    </Layout>
  );
};

export default AboutPage;
