import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Heading from "../global/heading";
import { graphql, useStaticQuery } from "gatsby";
import Paragraph from "../global/paragraph";
import { Masonry } from "@mui/lab";
import { CgArrowLongRight } from "react-icons/cg";
import Background from "../../images/background.svg";

const Pricing = ({ isPage }) => {
  const data = useStaticQuery(graphql`
    query PricingQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "services" } }
        sort: { childMdx: { frontmatter: { id: ASC } } }
      ) {
        nodes {
          childMdx {
            frontmatter {
              id
              title
              package
              price
              icon {
                publicURL
              }
            }
          }
        }
      }
    }
  `);

  const priceData = data.allFile.nodes;

  const Center = ({ children, sx }) => {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", ...sx }}>
        {children}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        bgcolor: "background.main",
        py: 10,
        mt: isPage ? 0 : 10,
        backgroundImage: `url(${Background})`,
      }}
    >
      <Container>
        <Heading sx={{ textAlign: "center", mb: 5 }}>Our Pricing Plans</Heading>
        <Masonry spacing={5} columns={{ xs: 1, md: 2, lg: 3 }}>
          {priceData.map((item) => (
            <Card
              elevation={0}
              key={item.childMdx.frontmatter.id}
              sx={{
                borderRadius: 0,
                boxShadow: "0 0 10px 0 rgba(43,52,59,.1)",
              }}
            >
              <CardHeader
                sx={{ backgroundColor: "background.main" }}
                titleTypographyProps={{
                  sx: {
                    fontSize: 20,
                    textAlign: "center",
                    color: "black.main",
                  },
                }}
                title={item.childMdx.frontmatter.title}
              />
              <CardContent
                sx={{
                  p: 0,
                }}
              >
                <Center sx={{ my: 3 }}>
                  <img
                    src={item.childMdx.frontmatter.icon.publicURL}
                    style={{ width: 70 }}
                  />
                </Center>

                <Box
                  sx={{
                    textAlign: "center",
                    my: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 13,
                      mr: 1,
                      color: "text.main",
                      lineHeight: 1.2,
                      fontWeight: 500,
                    }}
                  >
                    Starts <br />
                    From
                  </Typography>
                  <Typography sx={{ fontSize: 32, color: "black.main" }}>
                    £{item.childMdx.frontmatter.price}.00
                  </Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  {item.childMdx.frontmatter.package.map((item) => (
                    <Typography
                      key={item}
                      sx={{
                        textAlign: "center",
                        color: "text.main",
                        py: 1,
                        borderBottom: "1px solid",
                        borderBottomColor: "#F1F1F1",
                        "&:last-of-type": {
                          borderBottom: "none",
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>

                <Center>
                  <Button
                    endIcon={<CgArrowLongRight />}
                    variant="blue-outlined"
                  >
                    Get Started
                  </Button>
                </Center>
              </CardContent>
            </Card>
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Pricing;
