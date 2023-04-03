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
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const names = ["Gas", "EICR", "EPC"];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const ServiceInfo = ({ activeStep, setActiveStep, orders, setOrders }) => {
  const {
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      services: orders.services.map((item) => item.service),
      gasAppliance: handleDefaultValue("Gas"),
      fuseBoard: handleDefaultValue("EICR"),
      bedroom: handleDefaultValue("EPC"),
    },
  });

  function handleDefaultValue(service) {
    return orders.services.map((item) => item.service).includes(service)
      ? `${orders.services.find((item) => item.service === service).quantity}_${
          orders.services.find((item) => item.service === service).price
        }`
      : "";
  }

  const services = watch("services");

  const onSubmit = (data) => {
    // const services = getValues("services");

    const services = data.services.map((item) => ({
      service: item,
      type: item === "Gas" ? "appliance" : item === "EICR" ? "board" : "room",
      price:
        item === "Gas"
          ? parseFloat(data.gasAppliance.split("_")[1])
          : item === "EICR"
          ? parseFloat(data.fuseBoard.split("_")[1])
          : parseFloat(data.bedroom.split("_")[1]),
      quantity:
        item === "Gas"
          ? data.gasAppliance.split("_")[0]
          : item === "EICR"
          ? data.fuseBoard.split("_")[0]
          : data.bedroom.split("_")[0],
    }));

    setOrders({ ...orders, services: services });
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
          name="services"
          control={control}
          rules={{ required: "Please select a service" }}
          render={({ field }) => (
            <FormControl fullWidth error={errors.services}>
              <InputLabel>Select Services</InputLabel>
              <Select
                {...field}
                multiple
                input={<OutlinedInput label="Select Services" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {names.map((name) => {
                  const services = getValues("services");
                  return (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={services.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  );
                })}
              </Select>
              <ErrorMessage
                errors={errors}
                name="services"
                render={({ message }) => (
                  <FormHelperText error>{message}</FormHelperText>
                )}
              />
            </FormControl>
          )}
        />

        {services.includes("Gas") ? (
          <Controller
            name="gasAppliance"
            control={control}
            rules={{ required: "Please select the number of gas appliances." }}
            render={({ field }) => (
              <FormControl fullWidth error={errors.gasAppliance}>
                <InputLabel>
                  How many gas appliances does this property has??
                </InputLabel>
                <Select
                  {...field}
                  label="How many gas appliances does this property has??"
                >
                  <MenuItem value={"1_80"}>1 appliance- £80</MenuItem>
                  <MenuItem value={"2_100"}>2 appliances- £100</MenuItem>
                  <MenuItem value={"3_120"}>3 appliances- £120</MenuItem>
                </Select>
                <ErrorMessage
                  errors={errors}
                  name="gasAppliance"
                  render={({ message }) => (
                    <FormHelperText error>{message}</FormHelperText>
                  )}
                />
              </FormControl>
            )}
          />
        ) : null}

        {services.includes("EICR") ? (
          <Controller
            name="fuseBoard"
            control={control}
            rules={{ required: "Please select the number of fuse boards." }}
            render={({ field }) => (
              <FormControl fullWidth error={errors.fuseBoard}>
                <InputLabel>
                  How many fuse board does the property has?
                </InputLabel>
                <Select
                  {...field}
                  label="How many fuse board does the property has?"
                >
                  <MenuItem value={"1_150"}>1 unit - £150</MenuItem>
                  <MenuItem value={"2_200"}>2 units £200</MenuItem>
                  <MenuItem disabled value={"3_Call for the price"}>
                    3 units - Call for the price
                  </MenuItem>
                </Select>
                <ErrorMessage
                  errors={errors}
                  name="fuseBoard"
                  render={({ message }) => (
                    <FormHelperText error>{message}</FormHelperText>
                  )}
                />
              </FormControl>
            )}
          />
        ) : null}

        {services.includes("EPC") ? (
          <Controller
            name="bedroom"
            control={control}
            rules={{ required: "Please select the number of bedrooms." }}
            render={({ field }) => (
              <FormControl fullWidth error={errors.bedroom}>
                <InputLabel>Number of bedrooms?</InputLabel>
                <Select {...field} label="Number of bedrooms?">
                  <MenuItem value={"0-3_80"}>0 -3 bedrooms £80</MenuItem>
                  <MenuItem value={"4-6_100"}>4-6 bedrooms £100</MenuItem>
                </Select>
                <ErrorMessage
                  errors={errors}
                  name="bedroom"
                  render={({ message }) => (
                    <FormHelperText error>{message}</FormHelperText>
                  )}
                />
              </FormControl>
            )}
          />
        ) : null}

        <Box sx={{ display: "flex", flexDirection: "row", pt: 2, mb: 5 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            // onClick={handleBack}
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

export default ServiceInfo;
