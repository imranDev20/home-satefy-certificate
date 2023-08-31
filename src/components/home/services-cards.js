import { Container } from "@mui/material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { graphql, useStaticQuery } from "gatsby";

import Heading from "../global/heading";
import ServicesCard from "./services-card";
import styled from "@emotion/styled";

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  paddingTop: 20,
  paddingBottom: 10,
  paddingLeft: 10,
  paddingRight: 10,
  "& .swiper-wrapper": {
    px: "10px",
    py: "10px",
  },
}));

function ServicesCards() {
  const data = useStaticQuery(graphql`
    query ServicesCardsQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "services" } }
        sort: { childMdx: { frontmatter: { id: ASC } } }
      ) {
        nodes {
          childMdx {
            fields {
              slug
            }
            frontmatter {
              title
              id
              price
              description
              icon {
                publicURL
              }
            }
          }
        }
      }
    }
  `);

  const services = data?.allFile?.nodes;

  return (
    <Container sx={{ mt: 20, mb: 15 }}>
      <Heading
        sx={{
          mb: 5,
          textAlign: "center",
          maxWidth: 600,
          mx: "auto",
        }}
      >
        Our Comprehensive Home Safety Solutions
      </Heading>
      <StyledSwiper
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          900: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {services.map((service) => {
          return (
            <SwiperSlide key={service.childMdx.frontmatter.id}>
              <ServicesCard service={service} />
            </SwiperSlide>
          );
        })}
      </StyledSwiper>
    </Container>
  );
}

export default ServicesCards;
