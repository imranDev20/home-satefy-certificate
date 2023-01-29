import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import BackgroundImage from "gatsby-background-image";
import React from "react";
import { Link as GatsbyLink } from "gatsby";

const PageHeader = ({ title, bgImage }) => {
  return (
    <Box component="section">
      <BackgroundImage style={{}} Tag="section" {...bgImage}>
        <Box
          sx={{
            height: "100%",
            position: "relative",
            pt: 10,
            pb: 10,
            "&::before": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              backgroundColor: "#2b2b2b",
              opacity: 0.9,
            },
          }}
        >
          <Typography
            sx={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              color: "white",
            }}
            component="h1"
            variant="h3"
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Breadcrumbs
              sx={{ position: "relative", zIndex: 1, color: "white" }}
              aria-label="breadcrumb"
            >
              <Link
                to="/"
                component={GatsbyLink}
                underline="hover"
                color="inherit"
              >
                Home
              </Link>

              <Typography sx={{ color: "secondary.main" }}>{title}</Typography>
            </Breadcrumbs>
          </Box>
        </Box>
      </BackgroundImage>
    </Box>
  );
};

export default PageHeader;
