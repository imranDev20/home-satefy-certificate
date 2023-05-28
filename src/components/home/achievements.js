import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Heading from "../global/heading";
import Paragraph from "../global/paragraph";
import { IntersectionObserver } from "../global/intersection-observer";
import { ProgressCircle } from "./progress-circle";
import WorldImage from "../../images/world.svg";

const achievements = [
  { id: 1, title: "Client Satisfactions", number: 99 },
  { id: 2, title: "Successful Certifications", number: 100 },
  { id: 3, title: "On-time Completion", number: 97 },
];

function Achievements() {
  return (
    <Box component="section">
      <Grid container spacing={0}>
        <Grid item md={5}></Grid>
        <Grid
          item
          md={7}
          sx={{
            backgroundColor: "primary.main",
            backgroundImage: `url(${WorldImage})`,
            backgroundSize: "cover",
          }}
        >
          <Box sx={{ maxWidth: 700, px: 5, py: 7 }}>
            <Heading
              sx={{
                color: "white",
              }}
            >
              You Motivate Us to Deliver Exceptional Certification Services
            </Heading>
            <Paragraph sx={{ color: "white", mt: 3 }}>
              Discover our impressive record of satisfied clients and see why
              they keep coming back to us for their certification needs. With
              over 10,000 successful certifications completed, an average
              response time of under 24 hours, and recognition for excellence in
              service, we've earned our reputation as a trusted partner. Our 98%
              on-time completion rate and 99% client satisfaction rate are
              testaments to our commitment to quality. Our team of experienced
              professionals is dedicated to providing expert guidance and
              personalized service to ensure your certification needs are met
              efficiently and effectively.
            </Paragraph>
            <Grid
              container
              spacing={5}
              sx={{
                mt: 5,
              }}
            >
              {achievements.map((item) => {
                return (
                  <Grid
                    item
                    md={4}
                    key={item.id}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IntersectionObserver>
                      <ProgressCircle percents={item.number} counter={true} />
                    </IntersectionObserver>
                    <Typography
                      textAlign="center"
                      component="p"
                      sx={{ color: "secondary.main", fontWeight: 600 }}
                    >
                      {item.title}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Achievements;
