import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FaqAccordion from "./faq-accordion";
// import CustomizedAccordions from "./faq-accordion";
// import Heading from "../global/heading";
// import { theme } from "../global/layout";
// import Paragraph from "../global/paragraph";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      ques: "What safety certifications do you offer?",
      ans: "At Home Safety Cert, we offer a range of safety certifications for landlords and estate agents. Our services include Gas Safety Certificate (CP12), Electrical certification or periodic inspection, Energy Performance Certificate (EPC), PAT testing, Emergency Light Certificate, Fire Alarm Certificate, Fire Risk Assessment, and full compliance services for HMO landlords.",
    },
    {
      id: 2,
      ques: "How long does it take to complete a safety certification?",
      ans: "The duration of a safety certification inspection depends on the type of certification required and the size of the property. Typically, it takes between 1-3 hours to complete a certification inspection.",
    },
    {
      id: 3,
      ques: "What is the cost of a safety certification?",
      ans: "The cost of a safety certification depends on the type of certification required and the size of the property. We provide bespoke quotes tailored to your specific requirements. Please contact us for a free, no-obligation quote.",
    },
    {
      id: 4,
      ques: "Do I need a safety certification for every property I own?",
      ans: "If you rent out a property, you are required by law to obtain safety certifications for certain aspects of the property, such as gas and electricity. Please contact us to discuss your specific requirements and obligations.",
    },
    {
      id: 5,
      ques: "What happens if I don't get a safety certification?",
      ans: "Failure to obtain safety certifications for your rental property can result in fines and legal action. Additionally, it can compromise the safety of your tenants and impact your insurance claims. We strongly recommend obtaining safety certifications to ensure compliance and peace of mind.",
    },
    {
      id: 6,
      ques: "How do I book a safety certification with Home Safety Cert?",
      ans: "You can book a safety certification with us by phone, email, or through our website. Our friendly team will guide you through the process and answer any questions you may have.",
    },
    {
      id: 7,
      ques: "What happens during a safety certification inspection?",
      ans: "During a safety certification inspection, our expert tradespeople will inspect and test the relevant aspects of your property to ensure compliance with legal requirements. We will provide you with a comprehensive report outlining the findings and any necessary actions required.",
    },
    {
      id: 8,
      ques: "How often do I need to renew my safety certification?",
      ans: "The frequency of safety certification renewals varies depending on the type of certification and local regulations. We will provide you with guidance on when your certification is due for renewal.",
    },
    {
      id: 9,
      ques: "What if I have a problem with my safety certification?",
      ans: "If you have any issues with your safety certification, please contact us immediately. Our team will work with you to resolve any problems and ensure your compliance and safety.",
    },
    {
      id: 10,
      ques: "Are your tradespeople qualified and insured?",
      ans: "Yes, all of our tradespeople are qualified and registered with UK official registration bodies. Additionally, they are insured for liability and professional indemnity to ensure your peace of mind.",
    },
  ];

  return (
    <Container sx={{ my: 15 }}>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item md={5}>
          <Box
            sx={{
              borderRight: "1px solid",
              borderRightColor: "border.main",
            }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                color: theme.typography.body2,
                fontWeight: 500,
              }}
            >
              Have any Questions?
            </Typography>
            <Heading
              level="h2"
              sx={{
                mb: 2,
                maxWidth: 600,
              }}
            >
              Recently Asked Questions
            </Heading>
          </Box>
        </Grid>
        <Grid item md={7}>
          <Paragraph>
            Discover answers to frequently asked questions regarding our
            landlord safety certifications and services. Clear any uncertainties
            and gain valuable insights.
          </Paragraph>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item md={6}>
          <FaqAccordion faqs={faqs.slice(0, 5).map((item) => item)} />
        </Grid>
        <Grid item md={6}>
          <FaqAccordion faqs={faqs.slice(5).map((item) => item)} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Faq;
