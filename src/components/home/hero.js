import React from "react";
// Import Swiper React components
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { CgArrowLongRight } from "react-icons/cg";

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "../../styles/swiper-custom.css";
import HeroInfos from "./hero-infos";

const CustomSwiper = styled(Swiper)(() => ({
  height: "calc(100vh - 108px)",
  maxHeight: 650,
}));

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "hero" } }
        sort: { childMdx: { frontmatter: { id: ASC } } }
      ) {
        nodes {
          childMdx {
            frontmatter {
              button
              id
              subtitle
              title
              image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  const slides = data?.allFile?.nodes;

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
      }}
    >
      <CustomSwiper
        spaceBetween={50}
        effect="fade"
        slidesPerView={1}
        // touchRatio={0}
        navigation
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
      >
        {slides.map((slide) => {
          const slideImage =
            slide.childMdx.frontmatter.image.childImageSharp.gatsbyImageData;

          const bgImage = convertToBgImage(slideImage);
          const id = slide.childMdx.frontmatter.id;

          return (
            <SwiperSlide key={id}>
              <BackgroundImage {...bgImage} style={{ height: "100%" }}>
                <Box
                  sx={{
                    height: "100%",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      left: 0,
                      background:
                        "linear-gradient(to right, rgba(255, 255, 255, 1) 0, rgba(255, 255, 255, 0.8) 40%, rgba(255, 255, 255, 0.7) 45%, rgba(255, 255, 255, 0) 55%)",
                    },
                  }}
                >
                  <Container sx={{ position: "relative", height: "100%" }}>
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        maxWidth: 600,
                        transform: "translateY(-50%)",
                        marginLeft: { xs: 3, md: 0 },
                      }}
                    >
                      <Typography
                        component="h4"
                        fontWeight={400}
                        sx={{
                          color: "black.main",
                          fontSize: 18,
                        }}
                        my={1}
                      >
                        {slide.childMdx.frontmatter.subtitle}
                      </Typography>
                      <Typography
                        component="h2"
                        variant="h2"
                        fontWeight={600}
                        sx={{
                          fontSize: { xs: 28, sm: 35, md: 50 },
                          color: "black.main",
                        }}
                        my={1}
                      >
                        {slide.childMdx.frontmatter.title}
                      </Typography>
                      <Typography variant="p" color="white">
                        {slide.childMdx.frontmatter.description}
                      </Typography>
                      <Box>
                        <Button
                          endIcon={<CgArrowLongRight />}
                          variant="blue"
                          sx={{ mt: 3 }}
                        >
                          Learn More
                        </Button>
                      </Box>
                    </Box>
                  </Container>
                </Box>
              </BackgroundImage>
            </SwiperSlide>
          );
        })}
      </CustomSwiper>
      <HeroInfos />
    </Box>
  );
};

export default Hero;
