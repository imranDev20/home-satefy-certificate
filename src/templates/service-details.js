import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import Layout from "../components/global/layout";
import { Button, Container, Grid, Stack } from "@mui/material";
import PageHeader from "../components/global/page-header";
import { convertToBgImage } from "gbimage-bridge";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const shortcodes = { Link, Grid };

export default function ServiceDetails({ data, children }) {
  const { title, image } = data.mdx.frontmatter;
  const background = image.childImageSharp.gatsbyImageData;
  const bgImage = convertToBgImage(background);

  return (
    <Layout>
      <PageHeader title={title} bgImage={bgImage} secondary="Services" />
      <Container>
        <Grid container spacing={4} my={3}>
          <Grid item md={3}>
            <Stack spacing={1}>
              <Button variant="contained">Hello</Button>
              <Button variant="contained">Hello</Button>
            </Stack>
          </Grid>
          <Grid item md={9}>
            <MDXProvider>{children}</MDXProvider>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title

        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
