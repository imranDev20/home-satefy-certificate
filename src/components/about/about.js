import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Heading from "../global/heading";
import { theme } from "../global/layout";
import Paragraph from "../global/paragraph";
import { Check, Phone } from "@mui/icons-material";
import { contacts } from "../../utils/constant";

const About = () => {
  const points = [
    "A comprehensive range of services provided",
    "Partnership with expert professionals who are registered and experienced in their respective fields.",
    "Customer rating system for a hassle-free experience and best service",
    "Free reminder services for service due notifications.",
    "No contract or direct debit setup required; charges applied only when agreed upon.",
    "Focus on providing peace of mind service and ensuring tenant safety and insurance claims are not compromised",
    "General safety check offered for each visited property, providing advance warning before accidents occur.",
  ];

  return (
    <Container
      sx={{
        my: 8,
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={6}></Grid>
        <Grid container item md={6} spacing={3}>
          <Grid item md={12}>
            <Heading
              level="h1"
              sx={{
                mb: 2,
                maxWidth: 600,
              }}
            >
              Introducing Home Safety Cert: Your Trusted Partner for Landlord
              Safety Certifications
            </Heading>

            <Paragraph>
              At Home Safety Cert, we specialize in landlord safety
              certifications. As per legal requirements, landlords must obtain
              various certificates to rent or sell a property. The majority of
              these certificates need annual revalidation. Managing these
              certifications has become increasingly challenging for landlords
              and estate agents due to complex laws and timelines. Our goal is
              to alleviate the burden of property certifications, providing you
              with peace of mind.
            </Paragraph>

            {/* {points.map((item) => (
              <Box sx={{ display: "flex" }}>
                <Check sx={{ color: "primary.main", mt: 0.5, mr: 0.5 }} />{" "}
                <Paragraph
                  sx={{
                    mb: 1,
                  }}
                >
                  {item}
                </Paragraph>
              </Box>
            ))} */}

            <Paragraph
              sx={{
                backgroundColor: "background.main",
                px: 2,
                py: 2,
                mt: 3,
                borderLeft: "4px solid",
                borderLeftColor: "primary.main",
                fontSize: 17,
              }}
            >
              As professionals, our utmost priority lies in valuing our service
              above revenue. Our growth hinges solely upon the recommendations
              we receive from satisfied clients like you. We toil diligently to
              ensure your happiness and contentment with our services.
            </Paragraph>
          </Grid>

          <Grid
            container
            item
            md={12}
            columns={14}
            display="flex"
            alignItems="center"
          >
            <Grid item xs={2}>
              <Box
                sx={{
                  backgroundColor: "secondary.main",
                  height: 55,
                  width: 55,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                }}
              >
                <Phone
                  sx={{
                    color: "black.main",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography
                component="span"
                sx={{
                  ...theme.typography.body2,
                  fontSize: 17,
                  mr: 1,
                }}
              >
                Call Anytime:
              </Typography>
              <Typography
                component="span"
                sx={{
                  color: "black.main",
                  fontSize: 22,
                  fontWeight: 600,
                }}
              >
                {contacts.phone.text}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
