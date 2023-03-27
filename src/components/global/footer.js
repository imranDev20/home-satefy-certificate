import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  Divider,
} from "@mui/material";
import React from "react";

import { theme } from "./layout";
import { Link as GatsbyLink } from "gatsby";
import { HiChevronRight, HiMapPin, HiEnvelope, HiPhone } from "react-icons/hi2";
import { contacts, navItems } from "../../utils/constant";

const others = [
  "Privacy Policy",
  "Terms & Condition",
  "Acceptable Use Policy",
  "Cookie Policy",
];

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "primary.main" }}>
      <Container maxWidth="lg" sx={{ color: "white", py: 5 }}>
        <Grid container spacing={5}>
          <Grid item sm={3}>
            <Typography
              component="h3"
              variant="h6"
              sx={{ color: "secondary.main", mb: 4 }}
            >
              About Company
            </Typography>
            <Typography
              paragraph
              sx={{ ...theme.typography.body2, color: "white" }}
            >
              MrHandy is your one-call solution for a wide range of maintenance
              and repair needs. We are fully insured professional team job
              right. We arearrive on time in uniform.
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <Typography
              component="h3"
              variant="h6"
              sx={{ color: "secondary.main", mb: 3 }}
            >
              Quick Link
            </Typography>

            {navItems.map((item) => (
              <Stack
                key={item}
                direction="row"
                alignItems="center"
                my={2}
                sx={{
                  ".MuiTypography-root:hover": {
                    color: "secondary.main",
                    transition: ".5s color ease",
                  },

                  "svg:has(+ .MuiTypography-root:hover)": {
                    color: "secondary.main",
                    transition: ".5s color ease",
                  },
                }}
              >
                <HiChevronRight style={{ marginRight: "5px" }} />
                <Link
                  sx={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  component={GatsbyLink}
                  to={
                    item === "Home"
                      ? "/"
                      : "/" + item.toLowerCase().replaceAll(" ", "-")
                  }
                >
                  {item}
                </Link>
              </Stack>
            ))}
          </Grid>

          <Grid item sm={3}>
            <Typography
              component="h3"
              variant="h6"
              sx={{ color: "secondary.main", mb: 3 }}
            >
              Miscellaneous
            </Typography>
            {others.map((item) => (
              <Stack
                key={item}
                direction="row"
                alignItems="center"
                my={2}
                sx={{
                  ".MuiTypography-root:hover": {
                    color: "secondary.main",
                    transition: ".5s color ease",
                  },

                  "svg:has(+ .MuiTypography-root:hover)": {
                    color: "secondary.main",
                    transition: ".5s color ease",
                  },
                }}
              >
                <HiChevronRight style={{ marginRight: "5px" }} />
                <Link
                  sx={{
                    color: "white",
                    textDecoration: "none",
                  }}
                  component={GatsbyLink}
                  to={
                    item === "Home"
                      ? "/"
                      : "/" + item.toLowerCase().replaceAll(" ", "-")
                  }
                >
                  {item}
                </Link>
              </Stack>
            ))}
          </Grid>
          <Grid item sm={3}>
            <Typography
              component="h3"
              variant="h6"
              sx={{ color: "secondary.main", mb: 3 }}
            >
              Contact Us
            </Typography>
            {Object.values(contacts).map((item) => (
              <Stack
                key={item.id}
                direction="row"
                alignItems="center"
                my={2}
                sx={{
                  ".MuiTypography-root:hover": {
                    color: item.type.includes("link") ? "secondary.main" : null,
                    transition: ".5s color ease",
                  },

                  "svg:has(+ a:hover)": {
                    color: item.type.includes("link") ? "secondary.main" : null,
                    transition: ".5s color ease",
                  },
                  a: {
                    color: "white",
                    transition: ".5s color ease",
                    textDecoration: "none",
                    "&:hover": {
                      color: "secondary.main",
                    },
                  },

                  svg: {
                    mr: 2,
                    color: "secondary.main",
                  },
                }}
              >
                <item.icon />
                {item.type.includes("email") ? (
                  <a href={`mailto:${item.text}`}>{item.text}</a>
                ) : item.type.includes("phone") ? (
                  <a href={`tel:${item.text}`}>{item.text}</a>
                ) : (
                  <Typography sx={{ color: "white" }}>{item.text}</Typography>
                )}
              </Stack>
            ))}
          </Grid>
        </Grid>
        <Divider sx={{ border: "1px solid rgba(255,255,255,.07)", my: 3 }} />
        <Typography paragraph textAlign="center" sx={{ color: "white" }}>
          Copyright © {new Date().getFullYear()} Home Safety Certificate. All
          rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
