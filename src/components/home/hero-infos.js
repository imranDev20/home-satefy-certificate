import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const heroInfo = [
  {
    id: 1,
    icon: "icon",
    title: "Opening Hours",
    info: "Mon - Fri: 08:00 - 20:00",
  },
  {
    id: 2,
    icon: "icon",
    title: "Where You Can Find Us",
    info: "49 Grand Street, Los Angeles",
  },
  {
    id: 3,
    icon: "icon",
    title: "24/7 We Support You",
    info: "(22) 400-630 / (22) 400-631",
  },
];

const HeroInfos = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "absolute",
        left: 0,
        bottom: 0,
        zIndex: 1,
        transform: "translateY(50%)",
      }}
    >
      <Grid container>
        <Grid
          item
          md={10}
          display="flex"
          justifyContent="flex-end"
          sx={{
            backgroundColor: "primary.main",
            borderTopRightRadius: 100,
            borderBottomRightRadius: 100,
          }}
        >
          <Box
            sx={{
              width: 1050,
              py: 4,
              pr: 6,
            }}
          >
            <Grid container spacing={3}>
              {heroInfo.map((item) => (
                <Grid container item md={4}>
                  <Grid item xs={3}>
                    {item.icon}
                  </Grid>
                  <Grid item xs={9}>
                    <Typography
                      fontWeight={600}
                      sx={{
                        color: "white",
                        fontSize: 16,
                        mb: 0.7,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      fontWeight={600}
                      sx={{
                        color: "white",
                        fontSize: 16,
                      }}
                    >
                      {item.info}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
    </Box>
  );
};

export default HeroInfos;
