import * as React from "react";

import Typography from "@mui/material/Typography";

export default function FaqAccordion({ faqs }) {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {faqs.map((faq, index) => (
        <Accordion
          expanded={expanded === `panel${index + 1}`}
          onChange={handleChange(`panel${index + 1}`)}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            sx={{
              px: 0,
            }}
          >
            <Typography>{faq.ques}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{}}>
            <Typography
              sx={{
                ...theme.typography.body2,
                fontSize: 17,
              }}
            >
              {faq.ans}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
