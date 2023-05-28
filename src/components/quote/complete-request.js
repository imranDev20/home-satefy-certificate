import { ErrorMessage } from "@hookform/error-message";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import dayjs from "dayjs";
import { Link } from "gatsby";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { http } from "../../services/http.service";
import { LoadingButton } from "@mui/lab";

const CompleteRequest = ({
  activeStep,
  setActiveStep,
  orders,
  setOrders,
  setSuccess,
}) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);

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

  const onSubmit = async (data) => {
    setIsLoading(true);
    const orderData = {
      services: orders.services,
      user: orders.customer,
    };

    const result = await http.post(process.env.API_URL + "/orders/", orderData);

    if (result.data.success) {
      setIsLoading(false);
      setSuccess(true);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  function calculateServiceTotal() {
    const servicePrices = orders.services.map((item) => item.price);

    return servicePrices.reduce((accumulator, number) => {
      return number + accumulator;
    }, 0);
  }

  function calculateTotalWithoutVat() {
    const servicePrices = calculateServiceTotal();

    if (!servicePrices) {
      return;
    }

    return servicePrices + orders.zoneCharge + orders.urgencyCharge;
  }

  function calculateVat() {
    return calculateServiceTotal() * 0.2;
  }

  function total() {
    return calculateVat() + calculateTotalWithoutVat();
  }

  return (
    <>
      <Stack
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        spacing={3}
        sx={{ my: 5, maxWidth: 500, mx: "auto" }}
      >
        <List
          disablePadding
          sx={{
            border: "1px solid",
            borderColor: "rgba(0, 0, 0, 0.12)",
            borderRadius: "5px",
          }}
        >
          <ListItem>
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontWeight: 500,
                },
              }}
              primary="Services"
            />
            <Typography fontWeight={500}>Charge</Typography>
          </ListItem>
          <Divider />
          {orders.services.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                secondaryTypographyProps={{
                  sx: { ...theme.typography.body2 },
                }}
                primary={item.service}
                secondary={`${item.quantity} x ${item.type}`}
              />
              <Typography fontWeight={500}>£{item.price}</Typography>
            </ListItem>
          ))}
        </List>

        <List
          disablePadding
          sx={{
            border: "1px solid",
            borderColor: "rgba(0, 0, 0, 0.12)",
            borderRadius: "5px",
          }}
        >
          <ListItem>
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontWeight: 500,
                },
              }}
              primary="Additional"
            />
            <Typography fontWeight={500}>Charge</Typography>
          </ListItem>

          <Divider />

          <ListItem>
            <ListItemText
              primary="Zone"
              secondary={orders.zone}
              secondaryTypographyProps={{
                sx: { ...theme.typography.body2 },
              }}
            />
            <Typography fontWeight={500}>£{orders.zoneCharge}</Typography>
          </ListItem>

          <ListItem>
            <ListItemText
              primary="Scheduled Time"
              secondary={
                Date.parse(orders.time) ? orders.time : `Within ${orders.time}`
              }
              secondaryTypographyProps={{
                sx: { ...theme.typography.body2 },
              }}
            />
            <Typography fontWeight={500}>
              £{Date.parse(orders.time) ? 0 : orders.urgencyCharge}
            </Typography>
          </ListItem>
        </List>

        <List
          disablePadding
          sx={{
            border: "1px solid",
            borderColor: "rgba(0, 0, 0, 0.12)",
            borderRadius: "5px",
          }}
        >
          <ListItem>
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontWeight: 500,
                },
              }}
              primary="Subtotal"
              secondary="Service + Additional"
            />
            <Typography fontWeight={500}>
              £{calculateTotalWithoutVat()}
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemText
              primary="VAT"
              secondary="20% of total"
              secondaryTypographyProps={{
                sx: { ...theme.typography.body2 },
              }}
            />
            <Typography fontWeight={500}>£{calculateVat()}</Typography>
          </ListItem>
        </List>

        <List
          disablePadding
          sx={{
            border: "1px solid",
            borderColor: "rgba(0, 0, 0, 0.12)",
            borderRadius: "5px",
          }}
        >
          <ListItem>
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontWeight: 500,
                },
              }}
              primary="Total"
              secondary="Including VAT"
            />
            <Typography fontWeight={500}>£{total()}</Typography>
          </ListItem>
        </List>

        <Controller
          name="name"
          control={control}
          rules={{
            required: "You must agree to our terms",
          }}
          render={({ field }) => (
            <>
              <FormControlLabel
                {...field}
                control={<Checkbox />}
                label={
                  <Box>
                    I agree to the{" "}
                    <Link
                      style={{
                        textDecoration: "none",
                        color: theme.palette.secondary.dark,
                      }}
                      to="/terms-and-conditions"
                    >
                      terms and conditions
                    </Link>
                  </Box>
                }
              />
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ message }) => (
                  <FormHelperText error>{message}</FormHelperText>
                )}
              />
            </>
          )}
        />

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
          <LoadingButton loading={isLoading} type="submit" sx={{ mr: 1 }}>
            Place Order
          </LoadingButton>
        </Box>
      </Stack>
    </>
  );
};

export default CompleteRequest;
