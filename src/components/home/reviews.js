import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Stack } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import AvatarIcon from "../../images/icons/avatar.svg";
import { FaQuoteLeft } from "react-icons/fa";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    name: "Justin Timberlake",
    location: "London, GB",
    review:
      "I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving. And most love of what we doing with your hard work. I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving. And most love of what we doing with your hard work.",
  },
  {
    name: "Justin Timberlake 1",
    location: "London, GB",
    review:
      "I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving. And most love of what we doing with your hard work.",
  },
  {
    name: "Justin Timberlake 2",
    location: "London, GB",
    review:
      "I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving. And most love of what we doing with your hard work.",
  },
  {
    name: "Justin Timberlake 3",
    location: "London, GB",
    review:
      "I received a cost and time estimate for installing a ceiling fan in a bedroom with no existing fan and changing the light switch. They were very professional, kept to their cost and time estimate and cleaned up well before leaving. And most love of what we doing with your hard work.",
  },
];

const Reviews = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ p: 7 }}>
      <Typography
        component="h3"
        variant="h4"
        textAlign="center"
        sx={{ color: "white", zIndex: 10, position: "relative", mb: 4 }}
      >
        See what our clients say about our company
      </Typography>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <Box key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <Stack
                  direction="row"
                  justifyContent="center"
                  sx={{ color: "#FFDD44", mt: 4 }}
                >
                  <StarRoundedIcon fontSize="16" />
                  <StarRoundedIcon fontSize="16" />
                  <StarRoundedIcon fontSize="16" />
                  <StarRoundedIcon fontSize="16" />
                  <StarRoundedIcon fontSize="16" />
                </Stack>

                <Typography
                  paragraph
                  color="white"
                  sx={{
                    fontSize: 18,
                    position: "relative",
                  }}
                  mt={1}
                  mb={2}
                  textAlign="center"
                  fontStyle="italic"
                >
                  {step.review.length > 300
                    ? step.review.slice(0, 300 - 1) + "..."
                    : step.review}
                </Typography>
                <Typography
                  textAlign="center"
                  component="p"
                  sx={{
                    color: "secondary.main",
                    fontSize: 22,
                    fontWeight: 600,
                  }}
                >
                  John F. Kennedy{" "}
                  <Box
                    component="span"
                    sx={{ fontSize: 14, fontWeight: 500, color: "text.main" }}
                  >
                    32 Salisbury Ave, London
                  </Box>
                </Typography>
              </>
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
};

export default Reviews;
