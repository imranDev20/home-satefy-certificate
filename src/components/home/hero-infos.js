import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import OpenIcon from "../../images/icons/open.svg";
import AddressMarkerIcon from "../../images/icons/address-marker.svg";
import PhoneIcon from "../../images/icons/phone.svg";
import EmailAtIcon from "../../images/icons/email-at.svg";
import { contacts } from "../../utils/constant";

const HeroInfos = () => {
  const heroInfo = [
    {
      id: 1,
      icon: OpenIcon,
      title: "Opening Hours",
      info: "Mon - Fri: 08:00 - 18:00",
    },
    {
      id: 2,
      icon: EmailAtIcon,
      title: "Get in touch with us",
      info: contacts.email.text,
    },
    {
      id: 3,
      icon: PhoneIcon,
      title: "24/7 Support",
      info: "020 3488 4929",
    },
  ];

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
            borderTopRightRadius: { xs: 0, sm: 100 },
            borderBottomRightRadius: { xs: 0, sm: 100 },
          }}
        >
          <Box
            sx={{
              maxWidth: 1050,
              width: "100%",
              py: 4,
              pr: 6,
            }}
          >
            <Grid container spacing={3}>
              {heroInfo.map((item) => (
                <Grid key={item.id} container item md={4}>
                  <Grid
                    item
                    xs={2}
                    sm={3}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{ width: 40, height: 40 }}
                      src={item.icon}
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={10} sm={9}>
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
