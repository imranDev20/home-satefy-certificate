import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Heading from "../global/heading";
import Paragraph from "../global/paragraph";
import { IntersectionObserver } from "../global/intersection-observer";
import { ProgressCircle } from "./progress-circle";
import WorldImage from "../../images/world.svg";

const achievements = [
  { id: 1, title: "ACTIVE WORKERS & EQUIPMENT" },
  { id: 2, title: "WORLD WIDE COVERAGE" },
  { id: 3, title: "TOTAL PROJECTS COMPLETED" },
];

function Achievements() {
  function rand(min = 0, max = 100) {
    return Math.floor(Math.random() * (+max - +min)) + +min;
  }

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
          <Box sx={{ maxWidth: 700, px: 6, py: 7 }}>
            <Heading
              sx={{
                color: "white",
              }}
            >
              State Of The Art Special Cleaning Techniques According To Industry
              Best Practices.
            </Heading>
            <Paragraph sx={{ color: "white", mt: 3 }}>
              Ensure that customer needs and expectations are determined and
              fulfilled with the aim of achieving customer satisfaction through
              over best practices.
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
                      <ProgressCircle percents={rand()} counter={true} />
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
