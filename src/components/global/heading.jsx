import { Typography } from "@mui/material";
import React from "react";

const Heading = ({ children, lineHeight, level, ...props }) => {
  return (
    <Typography
      component={level ? level : "h2"}
      sx={{ fontSize: 30, color: "black.main", fontWeight: 600, ...props?.sx }}
    >
      {children}
    </Typography>
  );
};

export default Heading;
