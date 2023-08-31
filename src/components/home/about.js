import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { theme } from "../global/layout";
import Paragraph from "../global/paragraph";
import { RxCheck } from "react-icons/rx";
import { CgArrowLongRight } from "react-icons/cg";
import Heading from "../global/heading";
import { StaticImage } from "gatsby-plugin-image";
import { Link as GatsbyLink } from "gatsby";

const features = [
  { id: 1, text: "Same & next day appointment" },
  { id: 2, text: "Fixed & instant price quote" },
  { id: 3, text: "Registered & expert professionals" },
  { id: 4, text: "Customer rated professionals" },
  { id: 5, text: "Certificate expiry reminder service" },
  { id: 6, text: "No contracts for regular services" },
];

const About = () => {
  return (
    <Container sx={{ my: 15 }}>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <StaticImage
            src="../../images/worker.jpeg"
            alt="Serviceman from   Home Safety Cert"
            placeholder="blurred"
            height={650}
            layout="constrained"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Heading>
            About Home Safety Cert - Our Commitment to Safety and Service
          </Heading>

          <Paragraph sx={{ my: 2 }}>
            We are a team of professionals focused on providing landlord safety
            certifications in a hassle-free manner. Our services include Gas
            Safety Certificates, Electrical certification, Energy Performance
            Certificates, PAT testing, Fire Alarm Certificates, Fire Risk
            Assessments, and more. Our vetted experts have extensive experience
            in their respective fields.
          </Paragraph>
          <Paragraph sx={{ my: 2 }}>
            Our customer-centric approach includes a rating system for
            tradespeople and a general safety check for potential hazards during
            each property visit. Our reminder service sends notifications when
            services are due, saving you time and hassle. We are constantly
            updating our system to make it easier for landlords and estate
            agents.
          </Paragraph>
          <Paragraph sx={{ my: 2 }}>
            We prioritize tenant safety and insurance claims, ensuring complete
            compliance and safety for your properties. Our services are
            hassle-free and require no contract or direct debit setup. We only
            charge when you agree to our services. Choose us for reliable and
            stress-free certification services.
          </Paragraph>

          <Grid container spacing={4}>
            <Grid item sm={6}>
              {features.slice(0, 3).map((item) => (
                <Typography
                  key={item.id}
                  sx={{
                    fontSize: 16,
                    color: "primary.main",
                    my: 1.5,
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                  }}
                  color="initial"
                >
                  <RxCheck fontSize={22} style={{ marginRight: 5 }} />
                  {item.text}
                </Typography>
              ))}
            </Grid>
            <Grid item sm={6}>
              {features.slice(3, 6).map((item) => (
                <Typography
                  key={item.id}
                  sx={{
                    fontSize: 16,
                    color: "primary.main",
                    my: 1.5,
                    fontWeight: 500,
                    display: "flex",
                    alignItems: "center",
                  }}
                  color="initial"
                >
                  <RxCheck fontSize={22} style={{ marginRight: 5 }} />
                  {item.text}
                </Typography>
              ))}
            </Grid>
          </Grid>
          <Button
            variant="blue"
            color="primary"
            sx={{ mt: 3 }}
            LinkComponent={GatsbyLink}
            to="/about"
            endIcon={<CgArrowLongRight />}
          >
            Read More
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
