import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { theme } from "../global/layout";
import Paragraph from "../global/paragraph";
import { RxCheck } from "react-icons/rx";
import { CgArrowLongRight } from "react-icons/cg";
import Heading from "../global/heading";

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
        <Grid item sm={6}></Grid>
        <Grid item sm={6}>
          <Heading>
            Experiences On Cleaning Area With Successful Project On Going.
          </Heading>

          <Paragraph sx={{ my: 2 }}>
            The Company’s mission is to ensure a professional & personalised
            total homecare solution for all customers. Completely trustworthy
            and hassle free. The Company’s vision is to cater to the largest.
          </Paragraph>
          <Paragraph sx={{ my: 2 }}>
            With years of culture of integrity and professionalism, our
            credibility as business has secured us contracts with huge range of
            clients.
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
