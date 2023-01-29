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

const ServiceInfo = ({ handleBack, handleNext, activeStep }) => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      services: [],
      gasAppliance: "",
      fuseBoard: "",
      bedrooms: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    const services = getValues("services");
    console.log(services);
  };

  const services = watch("services");

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
          render={({ field }) => (
            <FormControl fullWidth>
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
            </FormControl>
          )}
        />
        {services.includes("Gas") ? (
          <Controller
            name="gasAppliance"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>
                  How many gas appliances does this property has??
                </InputLabel>
                <Select
                  {...field}
                  label="How many gas appliances does this property has??"
                >
                  <MenuItem value={150}>1 appliance- £80</MenuItem>
                  <MenuItem value={200}>2 appliances- £100</MenuItem>
                  <MenuItem value={0}>3 appliances- £120</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        ) : null}

        {services.includes("EICR") ? (
          <Controller
            name="fuseBoard"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>
                  How many fuse board does the property has?
                </InputLabel>
                <Select
                  {...field}
                  label="How many fuse board does the property has?"
                >
                  <MenuItem value={150}>1 unit - £150</MenuItem>
                  <MenuItem value={200}>2 units £200</MenuItem>
                  <MenuItem value={0}>3 units - Call for the price</MenuItem>
                </Select>
              </FormControl>
            )}
          />
        ) : null}

        {services.includes("EPC") ? (
          <Controller
            name="bedrooms"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Number of bedrooms?</InputLabel>
                <Select {...field} label="Number of bedrooms?">
                  <MenuItem value={150}>0 -3 bedrooms £80</MenuItem>
                  <MenuItem value={200}>4-6 bedrooms £100</MenuItem>
                </Select>
              </FormControl>
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

export default ServiceInfo;
