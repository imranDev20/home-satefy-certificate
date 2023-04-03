import { ErrorMessage } from "@hookform/error-message";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const AdditionalInfo = ({ activeStep, setActiveStep, orders, setOrders }) => {
  const daysBefore = () => {
    const today = dayjs();
    return dayjs(today.set("hour", today.get("hour") + 72));
  };

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tflZone:
        orders.tflZone === "Inside TFL Zone 1"
          ? 0
          : orders.tflZone === "Outside TFL Zone 5"
          ? 1
          : "",
      isUrgent:
        orders.time === "24 Hours"
          ? 0
          : orders.time === "48 Hours"
          ? 1
          : Date.parse(orders.time)
          ? 2
          : "",
      time: Date.parse(orders.time) ? dayjs(orders.time) : null,
    },
  });
  const onSubmit = (data) => {
    setOrders({
      ...orders,
      tflZone: data.tflZone === 0 ? "Inside TFL Zone 1" : "Outside TFL Zone 5",
      tflCharge: data.tflZone === 0 ? 30 : 10,
      time:
        isUrgent === 0
          ? "24 Hours"
          : isUrgent === 1
          ? "48 Hours"
          : data.time.format(),
      urgencyCharge: isUrgent === 0 ? 100 : isUrgent === 1 ? 40 : null,
    });

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
          name="tflZone"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel>Inside TFL Zone 1 or outside TFL Zone 5?</InputLabel>
              <Select
                {...field}
                label="Inside TFL Zone 1 or outside TFL Zone 5?"
              >
                <MenuItem value={2}>No</MenuItem>
                <MenuItem value={0}>
                  Inside TFL Zone 1
                  <Box component="span" sx={{ color: green[500], ml: 1 }}>
                    (+£30)
                  </Box>
                </MenuItem>
                <MenuItem value={1}>
                  Outside TFL Zone 5
                  <Box component="span" sx={{ color: green[500], ml: 1 }}>
                    (+£10)
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>
          )}
        />

        <Controller
          name="isUrgent"
          control={control}
          rules={{ required: "Scheduled time is required" }}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel>
                Do you want the service in 24 hours or 48 hours?
              </InputLabel>
              <Select
                {...field}
                label="Do you want the service in 24 hours or 48 hours?"
              >
                <MenuItem value={0}>
                  24 Hours
                  <Box component="span" sx={{ color: green[500], ml: 1 }}>
                    (+£100)
                  </Box>
                </MenuItem>
                <MenuItem value={1}>
                  48 hours{" "}
                  <Box component="span" sx={{ color: green[500], ml: 1 }}>
                    (+£40)
                  </Box>
                </MenuItem>
                <MenuItem value={2}>Some other time</MenuItem>
              </Select>
              <ErrorMessage
                errors={errors}
                name="isUrgent"
                render={({ message }) => (
                  <FormHelperText error>{message}</FormHelperText>
                )}
              />
            </FormControl>
          )}
        />

        {isUrgent === 2 ? (
          <Controller
            name="time"
            control={control}
            rules={{ required: "Please give us a date" }}
            render={({ field }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <FormControl fullWidth>
                  <DatePicker
                    minDate={daysBefore()}
                    views={["day"]}
                    {...field}
                    label="Pick a date"
                    inputFormat="DD/MM/YYYY"
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <ErrorMessage
                    errors={errors}
                    name="time"
                    render={({ message }) => (
                      <FormHelperText error>{message}</FormHelperText>
                    )}
                  />
                </FormControl>
              </LocalizationProvider>
            )}
          />
        ) : null}

        <Box sx={{ display: "flex", flexDirection: "row", pt: 2, mb: 5 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={() =>
              setActiveStep((prevActiveStep) => prevActiveStep - 1)
            }
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

export default AdditionalInfo;
