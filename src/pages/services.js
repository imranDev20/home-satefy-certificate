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
          Our Best Cleaning Services
        </Heading>
        <Paragraph
          sx={{ maxWidth: 700, mx: "auto", textAlign: "center", mb: 5 }}
        >
          Ensure that customer needs and expectations are determined and
          fulfilled with the aim of achieving customer satisfaction through over
          best practices.
        </Paragraph>
        <Grid container spacing={3}>
          {services.map((service) => {
            return (
              <Grid item md={4}>
                <ServicesCard
                  key={service.childMdx.frontmatter.id}
                  service={service}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
};

export default ServicesPage;
