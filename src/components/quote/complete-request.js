import {
  Box,
  Button,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const CompleteRequest = ({ handleBack, handleNext, activeStep }) => {
  const daysBefore = () => {
    const today = dayjs();
    return dayjs(today.set("hour", today.get("hour") + 72));
  };

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isUlez: "",
      isUrgent: "",
      date: daysBefore(),
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const isUrgent = watch("isUrgent");

  return (
    <>
      <Stack
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        spacing={3}
        sx={{ my: 5, maxWidth: 500, mx: "auto" }}
      >
        <Controller
          name="isUlez"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel>
                Is your property in ULEZ area or outside Zone 5?
              </InputLabel>
              <Select
                {...field}
                label="Is your property in ULEZ area or outside Zone 5?"
              >
                <MenuItem value={0}>No</MenuItem>
                <MenuItem value={1}>Yes</MenuItem>
              </Select>
            </FormControl>
          )}
        />

        <Controller
          name="isUrgent"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel>
                Do you want the service in 24 hours or 48 hours?
              </InputLabel>
              <Select
                {...field}
                label="Do you want the service in 24 hours or 48 hours?"
              >
                <MenuItem value={0}>24 Hours - £100</MenuItem>
                <MenuItem value={1}>48 hours - £40</MenuItem>
                <MenuItem value={2}>Some other date</MenuItem>
              </Select>
            </FormControl>
          )}
        />

        {isUrgent === 2 ? (
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  minDate={daysBefore()}
                  views={["day"]}
                  {...field}
                  label="Pick a date"
                  inputFormat="DD/MM/YYYY"
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            )}
          />
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
          <Button type="submit" sx={{ mr: 1 }}>
            Next
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default CompleteRequest;

{
  /* <Stack sx={{ my: 5, maxWidth: 450, mx: "auto" }} spacing={3}>
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
    
    label="Do you want the service in 24 hours or 48 hours?"
    
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
</Stack> */
}
