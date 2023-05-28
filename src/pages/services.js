import { Container, Grid } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import React from "react";
import Heading from "../components/global/heading";
import Layout from "../components/global/layout";
import PageHeader from "../components/global/page-header";
import Paragraph from "../components/global/paragraph";
import ServicesCard from "../components/home/services-card";

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    query ServicesPageQuery {
      allFile(filter: { sourceInstanceName: { eq: "services" } }) {
        nodes {
          childMdx {
            frontmatter {
              title
              id
              price
              description
              icon {
                publicURL
              }
            }
            fields {
              slug
            }
          }
        }
      }

      file(name: { eq: "about-bg" }) {
        id
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const services = data?.allFile?.nodes;
  const background = data?.file.childImageSharp?.gatsbyImageData;
  const bgImage = convertToBgImage(background);

  return (
    <Layout>
      <PageHeader title="Services" bgImage={bgImage} />
      <Container sx={{ my: 10 }}>
        <Heading sx={{ textAlign: "center", mb: 1 }}>
          Your Comprehensive Solution for Home Safety Certification Services
        </Heading>
        <Paragraph
          sx={{ maxWidth: 700, mx: "auto", textAlign: "center", mb: 5 }}
        >
          Our experienced team offers a range of certifications to ensure your
          home is safe and compliant with regulations. We are committed to
          providing reliable and efficient services at competitive prices, and
          we strive to ensure the safety and well-being of our clients.
        </Paragraph>
        <Grid container spacing={3}>
          {services.map((service) => {
            return (
              <Grid item md={4} key={service.childMdx.frontmatter.id}>
                <ServicesCard service={service} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
};

export default ServicesPage;

export const Head = () => (
  <>
    <title>
      Property Safety Certifications and Compliance Services | Home Safety Cert
    </title>
    <meta
      name="title"
      content="Get Expert Safety Services for Your Home | Home Safety Cert"
    />
    <meta
      name="description"
      content="Discover Home Safety Cert's commitment to safety and service. Learn more about our team and how we can help you with safety certifications today."
    />
  </>
);
