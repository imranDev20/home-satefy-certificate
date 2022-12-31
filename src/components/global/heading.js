import { Typography } from "@mui/material";
import React from "react";

const Heading = ({ children, lineHeight, ...props }) => {
  return (
    <Typography
      component="h2"
      sx={{ fontSize: 30, color: "black.main", fontWeight: 600, ...props?.sx }}
    >
      {children}
    </Typography>
  );
};

export default Heading;
