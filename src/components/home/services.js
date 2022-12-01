import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import FlameIcon from "../../images/icons/flame-colored.svg";
import LightBulbIcon from "../../images/icons/lightbulb.svg";
import EpcIcon from "../../images/icons/energy-performance.svg";
import PassedIcon from "../../images/icons/passed.svg";
import FireExitIcon from "../../images/icons/fire-exit-colored.svg";
import FireAlarmIcon from "../../images/icons/fire-alarm-colored.svg";
import HouseIcon from "../../images/icons/house-colored.svg";
import RiskListIcon from "../../images/icons/fire-risk-list-colored.svg";

const services = [
  { id: 1, name: "Gas Certificate", icon: FlameIcon },
  { id: 2, name: "Electric Certificate", icon: LightBulbIcon },
  { id: 3, name: "EPC", icon: EpcIcon },
  { id: 4, name: "PAT", icon: PassedIcon },
  { id: 5, name: "Emergency Light Testing", icon: FireExitIcon },
  { id: 6, name: "Fire Alarm Testing", icon: FireAlarmIcon },
  { id: 7, name: "Risk Assessment", icon: RiskListIcon },
  { id: 8, name: "HMO", icon: HouseIcon },
];

const Services = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        component="h2"
        variant="h4"
        color="secondary"
        sx={{ textAlign: "center", fontWeight: 700 }}
      >
        Our Services
      </Typography>
      <Grid container spacing={7} mt={1}>
        {services.map((item) => (
          <Grid
            item
            sm={3}
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img style={{ width: 100 }} src={item.icon} alt="" />
            <Typography
              component="h4"
              variant="h6"
              color="secondary"
              sx={{ textAlign: "center", mt: 2 }}
            >
              {item.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
