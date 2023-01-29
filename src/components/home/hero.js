import React from "react";
// Import Swiper React components
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
import { Box, Typography, Button, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "@emotion/styled";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "../../styles/swiper-custom.css";

const CustomSwiper = styled(Swiper)(() => ({
  height: "95vh",
  maxHeight: 650,
}));

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      allFile(filter: { sourceInstanceName: { eq: "hero" } }) {
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

  console.log(data);
  const slides = data?.allFile?.nodes;

  return (
    <Box component="section">
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
                      backgroundColor: "black",
                      opacity: 0.7,
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
                        component="h2"
                        variant="h2"
                        color="white"
                        fontWeight={600}
                        sx={{
                          fontSize: { xs: 32, sm: 40, md: 60 },
                        }}
                        textTransform="uppercase"
                        my={1}
                      >
                        {slide.childMdx.frontmatter.title}
                      </Typography>
                      <Typography variant="p" color="white">
                        {slide.childMdx.frontmatter.description}
                      </Typography>
                      <Box>
                        <Button variant="white" sx={{ mt: 3 }}>
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
    </Box>
  );
};

export default Hero;
