import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import ServiceInfo from "./service-info";
import AdditionalInfo from "./additional-info";
import BasicInfo from "./basic-info";
import CompleteRequest from "./complete-request";
import Successful from "./success";
import Heading from "../global/heading";
import { Container } from "@mui/material";

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
    zone: "",
    zoneCharge: null,
    time: null,
    urgencyCharge: null,
    customer: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    total: null,
    agreedToTerms: false,
  });

  const [success, setSuccess] = React.useState(false);

  console.log(orders);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  if (activeStep === 4) {
    return (
      <Box>
        <Successful />
      </Box>
    );
  }

  return (
    <Container maxWidth="none" sx={{ mt: 7, maxWidth: 650 }}>
      <Box sx={{ width: "100%" }}>
        <Heading sx={{ textAlign: "center", mb: 5 }}>Request a Quote</Heading>

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
            setSuccess={setSuccess}
          />
        ) : null}
      </Box>
    </Container>
  );
}
