import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Heading from "../global/heading";
import { theme } from "../global/layout";
import Paragraph from "../global/paragraph";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Phone } from "@mui/icons-material";
import { contacts } from "../../utils/constant";

const features = [
  "Our main core values and commitment to health and safety",
  "We endeavor to provide you with a personal clean tailored",
  "We envy interview any potential cleaners in their own home",
  "Always ready to easy way in installing all security systems",
];

const About = () => {
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
              sx={{
                mb: 2,
                maxWidth: 600,
              }}
            >
              Home Safety Has 25 Years Of Excellence Of Providing Wide Range
              Services
            </Heading>
            <Paragraph>
              The Company’s mission is to ensure a professional & personalised
              total homecare solution for all customers. Completely trustworthy
              and hassle free. The Company’s vision is to cater to the largest.
            </Paragraph>
          </Grid>
          <Grid item md={6}>
            <Typography
              component="h3"
              sx={{
                fontSize: 20,
                mb: 2,
                fontWeight: 600,
              }}
            >
              The Best Cleaning
            </Typography>
            <Typography
              sx={{
                ...theme.typography.body2,
              }}
            >
              We are CBTI certified by Govt. for excellence cleaning work.
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography
              component="h3"
              sx={{
                fontSize: 20,
                mb: 2,
                fontWeight: 600,
              }}
            >
              The Best Cleaning
            </Typography>
            <Typography
              sx={{
                ...theme.typography.body2,
              }}
            >
              We are CBTI certified by Govt. for excellence cleaning work.
            </Typography>
          </Grid>
          <Grid item md={12}>
            {features.map((feature) => (
              <Box
                sx={{
                  ...theme.typography.body2,
                  fontSize: 18,
                  my: 0.5,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <BsChevronDoubleRight
                  style={{
                    marginRight: 10,
                    fontSize: 16,
                    color: theme.palette.primary.main,
                  }}
                />
                {feature}
              </Box>
            ))}
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
