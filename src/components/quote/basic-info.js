import { ErrorMessage } from "@hookform/error-message";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const BasicInfo = ({ activeStep, setActiveStep, orders, setOrders }) => {
  const {
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: orders.customer.name,
      address: orders.customer.address,
      email: orders.customer.email,
      phone: orders.customer.phone,
    },
  });
  const onSubmit = (data) => {
    setOrders({
      ...orders,
      customer: {
        name: data.name,
        address: data.address,
        email: data.email,
        phone: data.phone,
      },
    });
    console.log(orders);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  return (
    <>
      <Stack
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        spacing={3}
        sx={{ my: 5, maxWidth: 500, mx: "auto" }}
      >
        <Controller
          name="name"
          control={control}
          rules={{
            maxLength: {
              value: 50,
              message: "Name can't be more than 50 characters",
            },
            minLength: {
              value: 3,
              message: "Name can't be less than 3 characters",
            },
            required: "Please provide your name",
            pattern: {
              value: /^([^0-9]*)$/,
              message: "Numbers in human name is not valid.",
            },
          }}
          render={({ field }) => (
            <FormControl fullWidth>
              <TextField
                error={errors.name}
                {...field}
                label="Name"
                variant="outlined"
              />
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => (
                  <FormHelperText error>{message}</FormHelperText>
                )}
              />
            </FormControl>
          )}
        />

        <Controller
          name="address"
          control={control}
          error={errors.address}
          rules={{
            minLength: {
              value: 5,
              message: "Address can't be less than 5 characters",
            },
            required: "Please provide an address.",
          }}
          render={({ field }) => (
            <FormControl fullWidth>
              <TextField {...field} label="Address" variant="outlined" />
              <ErrorMessage
                errors={errors}
                name="address"
                render={({ message }) => (
                  <FormHelperText error>{message}</FormHelperText>
                )}
              />
            </FormControl>
          )}
        />

        <Controller
          name="phone"
          control={control}
          error={errors.phone}
          rules={{
            minLength: {
              value: 5,
              message: "Phone can't be less than 5 characters",
            },
            required: "Please provide a phone number.",
          }}
          render={({ field }) => (
            <TextField {...field} fullWidth label="Phone" variant="outlined" />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField {...field} fullWidth label="Email" variant="outlined" />
          )}
        />

        <Box sx={{ display: "flex", flexDirection: "row", pt: 2, mb: 5 }}>
          <Button
            color="inherit"
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

export default BasicInfo;
