import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const BasicInfo = ({ handleBack, handleNext, activeStep }) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      address: "",
      email: "",
      phone: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
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
          render={({ field }) => (
            <TextField {...field} fullWidth label="Name" variant="outlined" />
          )}
        />

        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Address"
              variant="outlined"
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
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

export default BasicInfo;
