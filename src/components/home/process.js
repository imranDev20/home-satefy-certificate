import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import BookingIcon from "../../images/steps/booking.svg";
import CalendarIcon from "../../images/steps/calendar.svg";
import CertificateIcon from "../../images/steps/certificate.svg";
import DoorIcon from "../../images/steps/door.svg";
import Heading from "../global/heading";
import Paragraph from "../global/paragraph";

const Process = () => {
  const processes = [
    {
      id: 1,
      title: "Book your service",
      subtitle:
        "Book our services via website or phone. Request a quote for fast, reliable service",
      icon: BookingIcon,
    },
    {
      id: 2,
      title: "Confirm the Inspection date",
      subtitle:
        "Choose the date and time that suits you best. We'll confirm it shortly. Flexible scheduling for your convenience.",
      icon: CalendarIcon,
    },
    {
      id: 3,
      title: "Open the door",
      subtitle:
        "Open the door and let our certified experts handle the job, hassle-free. Your safety is our top priority.",
      icon: DoorIcon,
    },
    {
      id: 4,
      title: "Receive your Certificate",
      subtitle:
        "After our certified professionals have completed their inspection and testing, you will receive your official certification promptly.",
      icon: CertificateIcon,
    },
  ];
  return (
    <Container component="section" sx={{ my: 15 }}>
      <Heading
        sx={{
          mb: 5,
          textAlign: "center",
          maxWidth: 600,
          mx: "auto",
        }}
      >
        Get the Services You Need in Just a Few Easy Steps
      </Heading>
      <Grid container spacing={5}>
        {processes.map((process, index) => (
          <Grid item md={3} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  borderRadius: 50,
                  border: "4px solid #f5f5f5",
                  width: "150px",
                  height: "150px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: 5,
                  position: "relative",
                }}
              >
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={process.icon}
                  alt={process.title}
                />
                <Box
                  sx={{
                    bgcolor: "secondary.main",
                    width: 40,
                    height: 40,
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: 40,
                    right: "-10px",
                    borderRadius: 30,
                    transform: "translateY(-50%)",
                    fontWeight: 600,
                    color: "primary.main",
                  }}
                >
                  0{index + 1}
                </Box>
              </Box>

              <Typography
                component="h3"
                sx={{
                  fontWeight: 600,
                  fontSize: 20,
                  textAlign: "center",
                  mb: 0.5,
                }}
              >
                {process.title}
              </Typography>
              <Paragraph sx={{ textAlign: "center" }}>
                {process.subtitle}
              </Paragraph>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Process;
