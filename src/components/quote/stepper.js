import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ServiceInfo from "./service-info";
import AdditionalInfo from "./additional-info";
import BasicInfo from "./basic-info";
import CompleteRequest from "./complete-request";

const steps = [
  "Service Info",
  "Additional Info",
  "Contact Info",
  "Confirmation",
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [orders, setOrders] = React.useState({
    services: [],
    tflZone: "",
    tflCharge: null,
    time: null,
    urgencyCharge: null,
    customer: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    total: null,
  });

  console.log(orders);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === 0 ? (
        <ServiceInfo
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          orders={orders}
          setOrders={setOrders}
        />
      ) : null}

      {activeStep === 1 ? (
        <AdditionalInfo
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          orders={orders}
          setOrders={setOrders}
        />
      ) : null}

      {activeStep === 2 ? (
        <BasicInfo
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          orders={orders}
          setOrders={setOrders}
        />
      ) : null}

      {activeStep === 3 ? (
        <CompleteRequest
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          orders={orders}
          setOrders={setOrders}
        />
      ) : null}

      {/* {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )} */}
    </Box>
  );
}
