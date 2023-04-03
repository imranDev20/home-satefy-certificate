import { Container, Grid } from "@mui/material";
import React from "react";
import CustomizedAccordions from "./faq-accordion";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      ques: "Our Best Cleaning Services",
      ans: "Ensure that customer needs and expectations are determined and fulfilled with the aim of achieving customer satisfaction through over best practices.",
    },
    {
      id: 2,
      ques: "Our Best Cleaning Services",
      ans: "Ensure that customer needs and expectations are determined and fulfilled with the aim of achieving customer satisfaction through over best practices.",
    },
    {
      id: 3,
      ques: "Our Best Cleaning Services",
      ans: "Ensure that customer needs and expectations are determined and fulfilled with the aim of achieving customer satisfaction through over best practices.",
    },
    {
      id: 4,
      ques: "Our Best Cleaning Services",
      ans: "Ensure that customer needs and expectations are determined and fulfilled with the aim of achieving customer satisfaction through over best practices.",
    },
    {
      id: 5,
      ques: "Our Best Cleaning Services",
      ans: "Ensure that customer needs and expectations are determined and fulfilled with the aim of achieving customer satisfaction through over best practices.",
    },
    {
      id: 6,
      ques: "Our Best Cleaning Services",
      ans: "Ensure that customer needs and expectations are determined and fulfilled with the aim of achieving customer satisfaction through over best practices.",
    },
  ];

  return (
    <Container sx={{ my: 15 }}>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <CustomizedAccordions faqs={faqs} />
        </Grid>
        <Grid item md={6}></Grid>
      </Grid>
    </Container>
  );
};

export default Faq;
