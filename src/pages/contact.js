import { Container, Grid } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import React from "react";
import Form from "../components/global/form";
import Heading from "../components/global/heading";
import Layout from "../components/global/layout";
import PageHeader from "../components/global/page-header";
import Paragraph from "../components/global/paragraph";

const ContactPage = () => {
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
      <PageHeader title="Contact" bgImage={bgImage} />
      <Container>
        <Grid container spacing={5} sx={{ my: 10 }}>
          <Grid item md={4}>
            <Heading>
              Have Be Any Questions Feel Free To Contact With Us!
            </Heading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit do
              eiusmodtempor incididunt ut lore Contrary to popular belief, Lorem
              Ipsum is not simpandom text. It has roots in of erature from 45
              BC, making it over 200 towars Richard Virginia.
            </Paragraph>
          </Grid>
          <Grid item md={8}>
            <Form />
          </Grid>
        </Grid>
      </Container>
      <div style={{ width: "100%" }}>
        <iframe
          width="100%"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kemp%20House%20EC1V%202NX%20London%20United%20Kingdom+(Home%20Safety%20Certificate)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html">
            measure area map
          </a>
        </iframe>
      </div>
    </Layout>
  );
};

export default ContactPage;
