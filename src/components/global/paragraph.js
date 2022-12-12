import { Typography } from "@mui/material";
import React from "react";
import { theme } from "./layout";

const Paragraph = ({ children, lineHeight, ...props }) => {
  console.log(props);
  return (
    <Typography
      paragraph
      sx={{
        ...theme.typography.body2,
        lineHeight: lineHeight ? lineHeight : 1.8,
        ...props?.sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default Paragraph;
