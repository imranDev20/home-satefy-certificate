import React from "react";
import { Box, useTheme } from "@mui/material";
import { useContext } from "react";
import { IntersectionContext } from "../global/intersection-observer";
import { motion } from "framer-motion";
import { Counter } from "./counter";

export const ProgressCircle = ({
  percents,
  counter = true,
  stroke = "#F7C355",
  // emptyStroke = "#e2e2e2",
  emptyStroke = stroke,
  emptyStrokeOpacity = 0.25,
  // emptyStrokeOpacity = 1,
  duration = 1.5,
  delay = 0.0,
  size = 150,
  strokeWidth = 3,
  caption,
}) => {
  const { inView } = useContext(IntersectionContext);
  const radius = 45;
  const circumference = Math.ceil(2 * Math.PI * radius);
  const fillPercents = Math.abs(
    Math.ceil((circumference / 100) * (percents - 100))
  );

  const theme = useTheme();

  const transition = {
    duration: duration,
    delay: delay,
    ease: "easeIn",
  };

  const variants = {
    hidden: {
      strokeDashoffset: circumference,
      transition,
    },
    show: {
      strokeDashoffset: fillPercents,
      transition,
    },
  };

  return (
    <>
      <Box
        justifyContent="center"
        alignItems="center"
        position="relative"
        mb={3}
      >
        {counter && (
          <Box
            position="absolute"
            sx={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
            fontSize={size >= 100 ? 30 : 20}
            fontWeight={600}
            color={theme.palette.secondary.main}
          >
            <Counter valueTo={percents} totalDuration={duration + delay} />%
          </Box>
        )}
        <Box height={size}>
          <svg
            viewBox="0 0 100 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
          >
            <circle
              cx="50"
              cy="50"
              r={radius}
              className="circle"
              strokeWidth={strokeWidth}
              stroke={emptyStroke}
              strokeOpacity={emptyStrokeOpacity}
              fill="transparent"
            />
          </svg>
          <svg
            viewBox="0 0 100 100"
            width={size}
            height={size}
            style={{
              position: "absolute",
              transform: "rotate(-90deg)",
              overflow: "visible",
              marginLeft: -size,
            }}
          >
            <motion.circle
              cx="50"
              cy="50"
              r={radius}
              strokeWidth={strokeWidth}
              stroke={stroke}
              fill="transparent"
              strokeDashoffset={fillPercents}
              strokeDasharray={circumference}
              variants={variants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            />
          </svg>
        </Box>
      </Box>
      {caption && (
        <Box width={size} fontSize={3} color="red" textAlign="center">
          {caption}
        </Box>
      )}
    </>
  );
};
