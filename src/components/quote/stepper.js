import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  StepLabel,
  TextField,
} from "@mui/material";
import SelectServicesDropdown from "./select-services-dropdown";
import dayjs from "dayjs";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const steps = ["Basic Information", "Service Information", "Complete Request"];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton
              color="inherit"
              onClick={handleStep(index)}
              disableRipple
            >
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
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
            {/* <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              HELLO WORLD Step {activeStep + 1}
            </Typography> */}

            {activeStep === 0 ? (
              <Stack spacing={3} sx={{ my: 5, maxWidth: 450, mx: "auto" }}>
                <TextField fullWidth label="Name" variant="outlined" />
                <TextField fullWidth label="Address" variant="outlined" />
                <TextField fullWidth label="Phone" variant="outlined" />
                <TextField fullWidth label="Email" variant="outlined" />
              </Stack>
            ) : null}

            {activeStep === 1 ? (
              <Stack spacing={3} sx={{ my: 5, maxWidth: 450, mx: "auto" }}>
                <SelectServicesDropdown />
                <FormControl fullWidth>
                  <InputLabel>
                    How many gas appliances does this property has??
                  </InputLabel>
                  <Select
                    value={age}
                    label="How many gas appliances does this property has?? "
                    onChange={handleChange}
                  >
                    <MenuItem value={150}>1 appliance- £80</MenuItem>
                    <MenuItem value={200}>2 appliances- £100</MenuItem>
                    <MenuItem value={0}>3 appliances- £120</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>
                    How many fuse board does the property has?
                  </InputLabel>
                  <Select
                    value={age}
                    label="How many fuse board does the property has?"
                    onChange={handleChange}
                  >
                    <MenuItem value={150}>1 unit - £150</MenuItem>
                    <MenuItem value={200}>2 units £200</MenuItem>
                    <MenuItem value={0}>3 units - Call for the price</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>Number of bedrooms?</InputLabel>
                  <Select
                    value={age}
                    label="Number of bedrooms?"
                    onChange={handleChange}
                  >
                    <MenuItem value={150}>0 -3 bedrooms £80</MenuItem>
                    <MenuItem value={200}>4-6 bedrooms £100</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            ) : null}

            {activeStep === 2 ? (
              <Stack sx={{ my: 5, maxWidth: 450, mx: "auto" }} spacing={3}>
                <FormControl fullWidth>
                  <InputLabel>
                    Is your property in ULEZ area or outside Zone 5?
                  </InputLabel>
                  <Select
                    value={age}
                    label="Is your property in ULEZ area or outside Zone 5?"
                    onChange={handleChange}
                  >
                    <MenuItem value={0}>Yes</MenuItem>
                    <MenuItem value={1}>No</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel>
                    Do you want the service in 24 hours or 48 hours?
                  </InputLabel>
                  <Select
                    value={age}
                    label="Do you want the service in 24 hours or 48 hours?"
                    onChange={handleChange}
                  >
                    <MenuItem value={0}>24 Hours - £100 </MenuItem>
                    <MenuItem value={1}>48 hours - £40</MenuItem>
                    <MenuItem value={1}>Some other date</MenuItem>
                  </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Pick a date"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>

                <TextField
                  label="Additional message (Optional)"
                  multiline
                  rows={4}
                />
              </Stack>
            ) : null}

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2, mb: 5 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
