import { Container } from "@mui/material";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { graphql, useStaticQuery } from "gatsby";

import Heading from "../global/heading";
import ServicesCard from "./services-card";

function ServicesCards() {
  const data = useStaticQuery(graphql`
    query ServicesCardsQuery {
      allFile(filter: { sourceInstanceName: { eq: "services" } }) {
        nodes {
          childMdx {
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
    <Container sx={{ my: 15 }}>
      <Heading
        sx={{
          mb: 5,
          textAlign: "center",
          maxWidth: 600,
          mx: "auto",
        }}
      >
        Get Amazing Cleaning By Mr. Handy Just By Following Simple Steps
      </Heading>
      <Swiper
        style={{
          paddingTop: 20,
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
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
      </Swiper>
    </Container>
  );
}

export default ServicesCards;
