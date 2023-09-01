import { Box, Button, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { convertToBgImage } from "gbimage-bridge";
import React from "react";
import Paragraph from "../global/paragraph";
import { theme } from "../global/layout";
import { Link as GatsbyLink } from "gatsby";
import { CgArrowLongRight } from "react-icons/cg";

const Cta = () => {
  const background = useStaticQuery(graphql`
    query CtaBgQuery {
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
    <BackgroundImage Tag="section" {...bgImage}>
      <Box
        sx={{
          height: "100%",
          position: "relative",
          pt: 10,
          pb: 10,
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            backgroundColor: "primary.main",
            opacity: 0.8,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
            maxWidth: 900,
            px: 5,
            mx: "auto",
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontSize: 56, color: "white", mb: 3 }}
          >
            How can we help you?
          </Typography>
          <Paragraph
            sx={{
              ...theme.typography.body2,
              color: "white",
              fontSize: 17,
            }}
          >
            Home Safety Cert collaborates with vetted professionals who are
            registered with official UK bodies. Our tradespeople are highly
            skilled and experienced in their respective fields. We value
            customer feedback to ensure the best hassle-free experience for you.
          </Paragraph>
          <Button
            variant="blue"
            color="primary"
            to="/quote/"
            LinkComponent={GatsbyLink}
            sx={{
              mt: 3,
              backgroundColor: "transparent",
              border: "2px solid",
              borderColor: "secondary.main",
              color: "secondary.main",
              "&:hover": {
                backgroundColor: "secondary.main",
                color: "white",
              },
            }}
            endIcon={<CgArrowLongRight />}
          >
            Request a Quote
          </Button>
        </Box>
      </Box>
    </BackgroundImage>
  );
};

export default Cta;
