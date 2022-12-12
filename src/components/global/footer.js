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
import { navItems } from "./drawer";
import { theme } from "./layout";
import { Link as GatsbyLink } from "gatsby";
import { HiChevronRight, HiMapPin, HiEnvelope, HiPhone } from "react-icons/hi2";

const others = [
  "Privacy Policy",
  "Terms & Condition",
  "Acceptable Use Policy",
  "Cookie Policy",
];

const contact = [
  {
    id: 1,
    type: "text",
    text: "1058 Meadowb, Mall Road",
    icon: HiMapPin,
  },
  {
    id: 2,
    type: "link-email",
    text: "hello@homesafetycert.co.uk",
    icon: HiEnvelope,
  },
  {
    id: 3,
    type: "link-phone",
    text: "+44 7894 860827",
    icon: HiPhone,
  },
];

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "secondary.main" }}>
      <Container maxWidth="lg" sx={{ color: "text.main", py: 5 }}>
        <Grid container spacing={5}>
          <Grid item sm={3}>
            <Typography
              component="h3"
              variant="h6"
              sx={{ color: "white", mb: 4 }}
            >
              About Company
            </Typography>
            <Typography paragraph sx={{ ...theme.typography.body2 }}>
              MrHandy is your one-call solution for a wide range of maintenance
              and repair needs. We are fully insured professional team job
              right. We arearrive on time in uniform.
            </Typography>
          </Grid>
          <Grid item sm={3}>
            <Typography
              component="h3"
              variant="h6"
              sx={{ color: "white", mb: 3 }}
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
                    color: "primary.main",
                    transition: ".5s color ease",
                  },

                  "svg:has(+ .MuiTypography-root:hover)": {
                    color: "primary.main",
                    transition: ".5s color ease",
                  },
                }}
              >
                <HiChevronRight style={{ marginRight: "5px" }} />
                <Link
                  sx={{
                    color: "text.main",
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
              sx={{ color: "white", mb: 3 }}
            >
              Services
            </Typography>
            {others.map((item) => (
              <Stack
                key={item}
                direction="row"
                alignItems="center"
                my={2}
                sx={{
                  ".MuiTypography-root:hover": {
                    color: "primary.main",
                    transition: ".5s color ease",
                  },

                  "svg:has(+ .MuiTypography-root:hover)": {
                    color: "primary.main",
                    transition: ".5s color ease",
                  },
                }}
              >
                <HiChevronRight style={{ marginRight: "5px" }} />
                <Link
                  sx={{
                    color: "text.main",
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
              sx={{ color: "white", mb: 3 }}
            >
              Contact Us
            </Typography>
            {contact.map((item) => (
              <Stack
                key={item.id}
                direction="row"
                alignItems="center"
                my={2}
                sx={{
                  ".MuiTypography-root:hover": {
                    color: item.type.includes("link") ? "primary.main" : null,
                    transition: ".5s color ease",
                  },

                  "svg:has(+ a:hover)": {
                    color: item.type.includes("link") ? "primary.main" : null,
                    transition: ".5s color ease",
                  },
                  a: {
                    color: "text.main",
                    transition: ".5s color ease",
                    textDecoration: "none",
                    "&:hover": {
                      color: "primary.main",
                    },
                  },

                  svg: {
                    mr: 2,
                  },
                }}
              >
                <item.icon />
                {item.type.includes("email") ? (
                  <a href={`mailto:${item.text}`}>{item.text}</a>
                ) : item.type.includes("phone") ? (
                  <a href={`tel:${item.text}`}>{item.text}</a>
                ) : (
                  <Typography>{item.text}</Typography>
                )}
              </Stack>
            ))}
          </Grid>
        </Grid>
        <Divider sx={{ border: "1px solid rgba(255,255,255,.07)", my: 3 }} />
        <Typography paragraph textAlign="center">
          Copyright © {new Date().getFullYear()} Home Safety Certificate. All
          rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
