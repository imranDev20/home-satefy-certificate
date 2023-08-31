import {
  Box,
  Container,
  Grid,
  Link as MuiLink,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import React from "react";
import Form from "../components/global/form";
import Heading from "../components/global/heading";
import Layout from "../components/global/layout";
import PageHeader from "../components/global/page-header";
import Paragraph from "../components/global/paragraph";
import { socials } from "../utils/constant";
import { FaRegEnvelope, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

const infoBlocks = [
  {
    id: 1,
    icon: FaRegEnvelope,
    title: "Email Address",
    infos: ["info@yourmail.com", "email@example.com"],
  },
  {
    id: 2,
    icon: FaMapMarkerAlt,
    title: "Our Address",
    infos: ["45 Mikraham Street", "Trooklyn, New York 47895"],
  },
  {
    id: 3,
    icon: FaRegClock,
    title: "Open Hours",
    infos: ["Mon - Fri: 9am - 7pm", "Sat - Sun: closed"],
  },
];

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query ContactPageQuery {
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
              Let Us Help You Ensure Your Property is Safe and Certified.
              Contact Us Today!
            </Heading>
            <Paragraph>
              Contact us today and let us take the headache out of property
              certifications. Our expert team ensures your property is safe and
              certified.
            </Paragraph>
            <Stack direction="row" spacing={2}>
              {socials.map((social) => (
                <Tooltip title={social.name} placement="top">
                  <MuiLink
                    href={social.href}
                    target="_blank"
                    sx={{
                      border: "1px solid",
                      width: 30,
                      height: 30,
                      p: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderColor: "secondary.main",
                      color: "secondary.main",
                      borderRadius: 300,
                    }}
                  >
                    <social.icon />
                  </MuiLink>
                </Tooltip>
              ))}
            </Stack>
          </Grid>
          <Grid item md={8}>
            <Form />
          </Grid>
        </Grid>
      </Container>

      <div style={{ width: "100%", position: "relative", marginTop: 150 }}>
        <Grid
          container
          sx={{
            backgroundColor: "primary.main",
            maxWidth: 1000,
            mx: "auto",
            borderRadius: { xs: 0, md: 200 },
            position: { xs: "relative", md: "absolute" },
            left: "50%",
            top: "-15%",
            transform: "translateX(-50%)",
          }}
        >
          {infoBlocks.map((item) => (
            <Grid
              item
              md={4}
              xs={12}
              sx={{
                py: 3,
                px: 5,
                borderRight: "1px solid",
                borderRightColor: "rgba(255,255,255,.07)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  mr: 2,
                  backgroundColor: "rgba(255,255,255,.07)",
                  color: "white",
                  width: 50,
                  height: 50,
                  borderRadius: 200,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <item.icon
                  style={{
                    fontSize: 28,
                  }}
                />
              </Box>
              <Box>
                <Typography
                  component="h4"
                  variant="h6"
                  sx={{
                    color: "white",
                  }}
                >
                  {item.title}
                </Typography>

                {item.infos.map((info) => (
                  <Typography
                    sx={{
                      color: "white",
                    }}
                  >
                    {info}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
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

export const Head = () => (
  <>
    <title>Contact Home Safety Cert | Get in Touch Today</title>
    <meta
      name="title"
      content="Contact Us for Property Safety and Compliance | Home Safety Cert"
    />
    <meta
      name="description"
      content="Contact Home Safety Cert for all your property safety needs. Our team of experts are here to help you achieve compliance with ease. Call us today to learn more."
    />
  </>
);
