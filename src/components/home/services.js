import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import Heading from "../global/heading";
import Paragraph from "../global/paragraph";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import styled from "@emotion/styled";
import { Link as GatsbyLink } from "gatsby";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  ".swiper-pagination-bullet": {
    width: 25,
    height: 7,
    borderRadius: 2,
    marginLeft: "10px!important",
    marginRight: "10px!important",
    transition: "0.5s ease all",
  },
  ".swiper-pagination-bullet-active": {
    width: 7,
    borderRadius: 50,
    background: theme.palette.primary.main,
  },
}));

const Services = () => {
  const data = useStaticQuery(graphql`
    query HomeServices {
      allFile(
        filter: { sourceInstanceName: { eq: "services" } }
        sort: { childMdx: { frontmatter: { id: ASC } } }
      ) {
        nodes {
          childMdx {
            frontmatter {
              id
              title
              image {
                childImageSharp {
                  gatsbyImageData(
                    transformOptions: { cropFocus: CENTER, fit: COVER }
                    width: 300
                    height: 360
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const servicesData = data.allFile.nodes;

  return (
    <>
      <StyledSwiper
        style={{ paddingBottom: 50 }}
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={3}
        // autoplay={{
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
        autoplay
        pagination={{ clickable: true }}
        slidesPerView={5}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          992: {
            slidesPerView: 3,
          },
          1168: {
            slidesPerView: 5,
          },
        }}
      >
        {servicesData.map((item) => {
          const slug = item.childMdx.frontmatter.title
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");

          return (
            <SwiperSlide key={item.childMdx.frontmatter.id}>
              <Box
                sx={{
                  position: "relative",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 1,
                    transition: "0.3s ease all",
                  },

                  "&:hover": {
                    ".MuiBox-root ": {
                      top: "50%",
                      opacity: 1,
                    },
                    ".service-image": {
                      transform: "rotate(1deg) scale(1.05)",
                    },
                    "&::before": {
                      backgroundColor: "rgba(0,44,91,.8)",
                    },
                  },
                }}
              >
                <GatsbyImage
                  style={{ width: "100%" }}
                  imgStyle={{ transition: "0.3s ease all" }}
                  imgClassName="service-image"
                  alt={item.childMdx.frontmatter.title}
                  image={
                    item.childMdx.frontmatter.image.childImageSharp
                      .gatsbyImageData
                  }
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: "30%",
                    left: "50%",
                    opacity: 0,
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    zIndex: 2,
                    transition: "0.3s ease all",
                  }}
                >
                  <Link
                    component={GatsbyLink}
                    to={`/services/${slug}`}
                    sx={{
                      mb: 2,
                      fontSize: 26,
                      color: "white",
                      textDecoration: "none",
                      textAlign: "center",
                      fontWeight: 500,
                      transition: "0.3s color ease",
                      "&:hover": {
                        color: "secondary.main",
                      },
                    }}
                  >
                    {item.childMdx.frontmatter.title}
                  </Link>
                  <Button variant="yellow" sx={{ py: 0.8 }}>
                    Read More
                  </Button>
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </StyledSwiper>
      <Container sx={{ my: 5 }}>
        <Grid container spacing={5}>
          <Grid item sm={6}>
            <Heading>
              Protect, Cleaning & Look After Your Biggest Household Investments
            </Heading>
          </Grid>
          <Grid item sm={6}>
            <Paragraph>
              Mr.Handy is a fantastic addition to your property providing
              additional living space & room to relax and look out upon your
              garden. A clean conservatory looks great & is something to feel
              proud of.
            </Paragraph>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Services;
