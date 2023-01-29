import React from "react";
import { Button, Card, Typography } from "@mui/material";
import { theme } from "../global/layout";
import { CgArrowLongRight } from "react-icons/cg";

function ServicesCard({ service }) {
  const { title, price, icon, description } = service.childMdx.frontmatter;
  return (
    <Card
      elevation={0}
      sx={{
        p: 4,
        boxShadow: "0 0 10px 0 rgba(0,0,0,.1)",
        transition: ".4s ease all",
        "&:hover": {
          transform: "translateY(-10px)",
        },
      }}
    >
      <img
        src={icon.publicURL}
        alt={title}
        style={{ width: 70, marginBottom: 20 }}
      />
      <Typography component="h3" sx={{ fontWeight: 600, fontSize: 20 }}>
        {title}
      </Typography>
      <Typography
        component="p"
        sx={{ ...theme.typography.body2, mb: 3, mt: 2 }}
      >
        {description}
      </Typography>
      <Button variant="blue" endIcon={<CgArrowLongRight />} sx={{ py: 1 }}>
        Book Now
      </Button>
    </Card>
  );
}

export default ServicesCard;
