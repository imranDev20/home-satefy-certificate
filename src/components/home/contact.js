import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import React from "react";
import {
  BsPerson,
  BsPhone,
  BsEnvelope,
  BsSignpostSplit,
  BsChatSquareQuote,
} from "react-icons/bs";
import { theme } from "../global/layout";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import Reviews from "./reviews";
import CallCenterIcon from "../../images/icons/call-center.svg";
import { convertToBgImage } from "gbimage-bridge";
import { graphql, useStaticQuery } from "gatsby";

import "swiper/css";
import BackgroundImage from "gatsby-background-image";

const Contact = ({ isPage }) => {
  const background = useStaticQuery(graphql`
    query AboutBgImage {
      file(name: { eq: "about-bg" }) {
        id
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `);

  const image = background.file.childImageSharp.gatsbyImageData;
  const bgImage = convertToBgImage(image);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        mb: 10,
        position: "relative",
        zIndex: 1,
      }}
    >
      <Grid
        container
        spacing={0}
        sx={{
          boxShadow: isPage
            ? "none"
            : { xs: "none", md: "0 0 9px 0 rgba(29, 33, 67, 0.10)" },
          width: "100%",
        }}
      >
        <Grid
          item
          md={6}
          sx={{
            backgroundColor: "primary.main",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              height: "100%",
              position: "relative",
              color: "white",
              maxWidth: 640,

              "&::before": {
                content: '""',
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                backgroundColor: "primary.main",
                opacity: 1,
              },
            }}
          >
            <Reviews />
          </Box>
        </Grid>
        <Grid item md={6} sx={{ backgroundColor: "white" }}>
          <BackgroundImage {...bgImage}>
            <Box
              sx={{
                height: "100%",
                position: "relative",
                display: "flex",
                justifyContent: "flex-start",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  backgroundColor: "secondary.main",
                  opacity: 0.9,
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  p: 7,
                  maxWidth: 640,
                }}
              >
                <Typography component="h2" variant="h4">
                  Get in Touch with Us
                </Typography>
                <Typography
                  paragraph
                  sx={{
                    ...theme.typography.body2,
                    my: 3,
                    maxWidth: "800px",
                    mx: "auto",
                    color: "black",
                  }}
                >
                  Like what you’ve seen so far? What you’ve seen on our website
                  is only the tip! To know more kindly drop us request.
                </Typography>
                <Grid container spacing={2}>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      placeholder="Your Name"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <BsPerson />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      placeholder="Your Number"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <BsPhone />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      placeholder="Your Email"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <BsEnvelope />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <TextField
                      fullWidth
                      placeholder="Enter Zip Code"
                      variant="outlined"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <BsSignpostSplit />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      placeholder="Message..."
                      variant="outlined"
                      fullWidth
                      multiline
                      sx={{
                        ".MuiInputBase-root": {
                          display: "flex",
                          alignItems: "start",
                        },
                      }}
                      minRows={5}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start" sx={{ mt: 1.8 }}>
                            <BsChatSquareQuote />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Button
                      fullWidth
                      variant="blue"
                      color="primary"
                      endIcon={<ArrowCircleRightRoundedIcon />}
                    >
                      Submit Request
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </BackgroundImage>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
