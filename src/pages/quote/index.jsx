import React, { useEffect, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import PageHeader from "../../components/global/page-header";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Container,
  Divider,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import { Box, Checkbox, FormControl, Stack } from "@mui/material";

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { green } from "@mui/material/colors";
import { navigate } from "gatsby";
import { http } from "../../services/http.service";
import { CgArrowLongRight } from "react-icons/cg";
import { Controller, useForm } from "react-hook-form";
import { getFutureTime } from "../../shared/utils/functions";

const QuotePage = ({ location }) => {
  const data = useStaticQuery(graphql`
    query QuoteQuery {
      file(name: { eq: "about-bg" }) {
        id
        childImageSharp {
          gatsbyImageData
        }
      }

      prices: allStripePrice {
        nodes {
          id
          product {
            name
          }
          currency
          unit_amount
        }
      }
    }
  `);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      postCode: "",
      address: "",
      notes: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const [isGas, setIsGas] = useState(true);
  const [gasItem, setGasItem] = useState("");

  const [isEicr, setIsEicr] = useState(true);
  const [eicrItem, setEicrItem] = useState("");

  const [isEpc, setIsEpc] = useState(true);
  const [epcItem, setEpcItem] = useState("");

  const [date, setDate] = useState(getFutureTime());
  const [isConfirm, setIsConfirm] = useState(false);
  const [lineItems, setLineItems] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [timeframe, setTimeframe] = useState("");
  const [tfl, setTfl] = useState("");

  const image = data.file.childImageSharp.gatsbyImageData;
  const bgImage = convertToBgImage(image);

  // useEffect(() => {
  //   const handleBeforeUnload = (event) => {
  //     event.preventDefault();
  //     event.returnValue = "";
  //     alert("Are you sure you want to leave?");
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  useEffect(() => {
    if (!isGas) {
      setGasItem("");
    }
  }, [isGas]);

  useEffect(() => {
    if (!isEicr) {
      setEicrItem("");
    }
  }, [isEicr]);

  useEffect(() => {
    if (!isEpc) {
      setEpcItem("");
    }
  }, [isEpc]);

  const stripeProducts = data.prices.nodes;

  const gasProducts = stripeProducts.filter((item) =>
    item.product.name.split(" ").includes("Gas")
  );

  const eicrProducts = stripeProducts.filter((item) =>
    item.product.name.split(" ").includes("EICR")
  );

  const epcProducts = stripeProducts.filter((item) =>
    item.product.name.split(" ").includes("EPC")
  );

  const handleReview = () => {
    const newLineItems = [...lineItems];

    if (gasItem !== "") {
      newLineItems.push({ price: gasItem, quantity: 1 });
    }

    if (eicrItem !== "") {
      newLineItems.push({ price: eicrItem, quantity: 1 });
    }

    if (epcItem !== "") {
      newLineItems.push({ price: epcItem, quantity: 1 });
    }

    if (tfl !== "" && tfl !== "not-applicable") {
      newLineItems.push({ price: tfl, quantity: 1 });
    }

    if (timeframe !== "" && timeframe !== "other") {
      newLineItems.push({ price: timeframe, quantity: 1 });
    }

    setLineItems(newLineItems);

    const selected = stripeProducts.filter((price) =>
      newLineItems.map((item) => item.price).includes(price.id)
    );

    setSelectedServices(selected.sort((a, b) => b.unit_amount - a.unit_amount));

    scrollToTop();
    setIsConfirm(true);
  };

  const isInfoFilledUp = !(
    (!isEicr && !isGas && !isEpc) ||
    (isGas && gasItem === "") ||
    (isEicr && eicrItem === "") ||
    (isEpc && epcItem === "") ||
    tfl === "" ||
    timeframe === ""
  );

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        postCode: data.postCode,
        address: data.address,
        notes: data.notes,
        services: selectedServices,
        lineItems: lineItems,
      };

      const response = await http.post(
        "/orders/create-checkout-session",
        payload
      );

      if (response.data.sessionUrl) {
        navigate(response.data.sessionUrl);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PageHeader title="Request a Quote" bgImage={bgImage} />
      <Container
        maxWidth="sm"
        sx={{
          py: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!isConfirm && (
          <Card elevation={2} sx={{ p: 2, width: "100%", maxWidth: 600 }}>
            <CardHeader title="Please provide the required informations" />

            <CardContent>
              <Stack spacing={3} sx={{ my: 2, maxWidth: 500, mx: "auto" }}>
                <FormControl component="fieldset" variant="standard">
                  <FormLabel
                    component="legend"
                    sx={{
                      fontSize: 18,
                      fontWeight: 500,
                    }}
                  >
                    Please select your services:
                  </FormLabel>
                  <FormGroup row>
                    <FormControlLabel
                      control={<Checkbox name="gas" />}
                      label="Gas"
                      checked={isGas}
                      onChange={(e) => setIsGas(e.target.checked)}
                    />
                    <FormControlLabel
                      control={<Checkbox name="eicr" />}
                      label="EICR"
                      checked={isEicr}
                      onChange={(e) => setIsEicr(e.target.checked)}
                    />
                    <FormControlLabel
                      control={<Checkbox name="epc" />}
                      label="EPC"
                      checked={isEpc}
                      onChange={(e) => setIsEpc(e.target.checked)}
                    />
                  </FormGroup>
                </FormControl>

                {isGas ? (
                  <Box
                    sx={{
                      border: "1px solid",
                      borderColor: "lightgray",
                      p: 2,
                      borderRadius: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontWeight: 500,
                      }}
                    >
                      Gas
                    </Typography>
                    <FormControl sx={{ mt: 2 }}>
                      <FormLabel>
                        How many gas appliances does this property has?
                      </FormLabel>
                      <RadioGroup
                        value={gasItem}
                        onChange={(e) => setGasItem(e.target.value)}
                      >
                        {gasProducts.reverse().map((gasProduct) => (
                          <FormControlLabel
                            key={gasProduct.id}
                            value={gasProduct.id}
                            control={<Radio />}
                            label={
                              <Typography>
                                {gasProduct.product.name.split("-")[1]} -
                                <Typography
                                  component="span"
                                  sx={{
                                    color: green[500],
                                    ml: 1,
                                    fontWeight: 500,
                                  }}
                                >
                                  £{gasProduct.unit_amount / 100}
                                </Typography>
                              </Typography>
                            }
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Box>
                ) : null}

                {isEicr ? (
                  <Box
                    sx={{
                      border: "1px solid",
                      borderColor: "lightgray",
                      p: 2,
                      borderRadius: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontWeight: 500,
                      }}
                    >
                      EICR
                    </Typography>
                    <FormControl sx={{ mt: 2 }}>
                      <FormLabel>
                        How many fuse boards does this property has?
                      </FormLabel>
                      <RadioGroup
                        value={eicrItem}
                        onChange={(e) => setEicrItem(e.target.value)}
                      >
                        {eicrProducts.reverse().map((eicrProduct) => (
                          <FormControlLabel
                            key={eicrProduct.id}
                            value={eicrProduct.id}
                            control={<Radio />}
                            label={
                              <Typography>
                                {eicrProduct.product.name.split("-")[1]} -
                                <Typography
                                  component="span"
                                  sx={{
                                    color: green[500],
                                    ml: 1,
                                    fontWeight: 500,
                                  }}
                                >
                                  £{eicrProduct.unit_amount / 100}
                                </Typography>
                              </Typography>
                            }
                          />
                        ))}
                        <FormControlLabel
                          value="other"
                          disabled
                          control={<Radio />}
                          label="3 Units (Call for Price)"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Box>
                ) : null}

                {isEpc ? (
                  <Box
                    sx={{
                      border: "1px solid",
                      borderColor: "lightgray",
                      p: 2,
                      borderRadius: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontWeight: 500,
                      }}
                    >
                      EPC
                    </Typography>
                    <FormControl sx={{ mt: 2 }}>
                      <FormLabel id="demo-radio-buttons-group-label">
                        Number of bedrooms?
                      </FormLabel>
                      <RadioGroup
                        value={epcItem}
                        onChange={(e) => setEpcItem(e.target.value)}
                      >
                        {epcProducts.reverse().map((epcProduct) => (
                          <FormControlLabel
                            key={epcProduct.id}
                            value={epcProduct.id}
                            control={<Radio />}
                            label={
                              <Typography>
                                {`${epcProduct.product.name.split("-")[1]}-${
                                  epcProduct.product.name.split("-")[2]
                                }`}{" "}
                                -
                                <Typography
                                  component="span"
                                  sx={{
                                    color: green[500],
                                    ml: 1,
                                    fontWeight: 500,
                                  }}
                                >
                                  £{epcProduct.unit_amount / 100}
                                </Typography>
                              </Typography>
                            }
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </Box>
                ) : null}

                {isGas || isEicr || isEpc ? (
                  <>
                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "lightgray",
                        p: 2,
                        borderRadius: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 500,
                        }}
                      >
                        Inside TFL Zone 1 or outside TFL Zone 5?
                      </Typography>
                      <FormControl sx={{ mt: 2 }}>
                        <RadioGroup
                          value={tfl}
                          onChange={(e) => setTfl(e.target.value)}
                        >
                          <FormControlLabel
                            value="not-applicable"
                            control={<Radio />}
                            label="Not applicable"
                          />
                          <FormControlLabel
                            value="price_1NkrbVJZT84KLAtmXdKQyONn"
                            control={<Radio />}
                            label={
                              <Typography>
                                Inside TFL Zone 1 -{" "}
                                <Typography
                                  component="span"
                                  sx={{
                                    color: green[500],
                                  }}
                                >
                                  £
                                  {stripeProducts.find(
                                    (item) =>
                                      item.id ===
                                      "price_1NkrbVJZT84KLAtmXdKQyONn"
                                  ).unit_amount / 100}
                                </Typography>
                              </Typography>
                            }
                          />
                          <FormControlLabel
                            value="price_1NkrbvJZT84KLAtmFFNyLuHS"
                            control={<Radio />}
                            label={
                              <Typography>
                                Outside TFL Zone 5 -{" "}
                                <Typography
                                  component="span"
                                  sx={{
                                    color: green[500],
                                  }}
                                >
                                  £
                                  {stripeProducts.find(
                                    (item) =>
                                      item.id ===
                                      "price_1NkrbvJZT84KLAtmFFNyLuHS"
                                  ).unit_amount / 100}
                                </Typography>
                              </Typography>
                            }
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>

                    <Box
                      sx={{
                        border: "1px solid",
                        borderColor: "lightgray",
                        p: 2,
                        borderRadius: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 20,
                          fontWeight: 500,
                        }}
                      >
                        Service Timeframes
                      </Typography>

                      <Stack spacing={3} alignItems="flex-start">
                        <FormControl sx={{ mt: 2 }}>
                          <RadioGroup
                            value={timeframe}
                            onChange={(e) => setTimeframe(e.target.value)}
                          >
                            <FormControlLabel
                              value="price_1NkrcbJZT84KLAtmQ7OGUUjh"
                              control={<Radio />}
                              label={
                                <Typography>
                                  In 24 Hours -{" "}
                                  <Typography
                                    component="span"
                                    sx={{
                                      color: green[500],
                                    }}
                                  >
                                    £
                                    {stripeProducts.find(
                                      (item) =>
                                        item.id ===
                                        "price_1NkrcbJZT84KLAtmQ7OGUUjh"
                                    ).unit_amount / 100}
                                  </Typography>
                                </Typography>
                              }
                            />
                            <FormControlLabel
                              value="price_1NkrdDJZT84KLAtm11e2Wusy"
                              control={<Radio />}
                              label={
                                <Typography>
                                  In 48 Hours -{" "}
                                  <Typography
                                    component="span"
                                    sx={{
                                      color: green[500],
                                    }}
                                  >
                                    £
                                    {stripeProducts.find(
                                      (item) =>
                                        item.id ===
                                        "price_1NkrdDJZT84KLAtm11e2Wusy"
                                    ).unit_amount / 100}
                                  </Typography>
                                </Typography>
                              }
                            />
                            <Box
                              sx={{
                                display: "flex",
                              }}
                            >
                              <FormControlLabel
                                value="other"
                                control={<Radio />}
                                label="Some other time"
                              />

                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <FormControl>
                                  <DatePicker
                                    disabled={timeframe !== "other"}
                                    minDate={getFutureTime()}
                                    views={["day"]}
                                    value={date}
                                    label="Pick a date"
                                    inputFormat="DD/MM/YYYY"
                                    onChange={(e) => setDate(e)}
                                    renderInput={(params) => (
                                      <TextField size="small" {...params} />
                                    )}
                                  />
                                </FormControl>
                              </LocalizationProvider>
                            </Box>
                          </RadioGroup>
                        </FormControl>
                      </Stack>
                    </Box>
                  </>
                ) : null}

                <Button
                  variant="blue"
                  onClick={handleReview}
                  disabled={!isInfoFilledUp}
                >
                  Review Order
                </Button>

                {!isInfoFilledUp ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <FormHelperText error>
                      Please fill up the required informations.
                    </FormHelperText>
                  </Box>
                ) : null}
              </Stack>
            </CardContent>
          </Card>
        )}

        {isConfirm && (
          <>
            <Card elevation={2} sx={{ p: 2, width: "100%", maxWidth: 600 }}>
              <CardHeader title="Review your order and checkout" />

              <CardContent>
                <Box
                  sx={{
                    border: "1px solid",
                    borderColor: "lightgray",
                    p: 2,
                    borderRadius: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 500,
                      }}
                    >
                      Servics
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 500,
                      }}
                    >
                      Price
                    </Typography>
                  </Box>
                  <Divider sx={{ my: 2 }} />

                  {selectedServices.map((product) => (
                    <Box
                      key={product.id}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography>{product.product.name}</Typography>
                      <Typography
                        sx={{
                          fontWeight: 500,
                        }}
                      >
                        £{product.unit_amount / 100}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    mt: 3,
                  }}
                  component="form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Box
                    sx={{
                      border: "1px solid",
                      borderColor: "lightgray",
                      p: 2,
                      borderRadius: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontWeight: 500,
                      }}
                    >
                      Please provide some personal informations
                    </Typography>

                    <Grid container spacing={3} sx={{ mt: 1 }}>
                      <Grid item md={6}>
                        <Controller
                          name="name"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              required
                              size="small"
                              label="Name"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item md={6}>
                        <Controller
                          name="email"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              required
                              size="small"
                              label="Email"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item md={6}>
                        <Controller
                          name="phone"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              required
                              size="small"
                              label="Phone"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item md={6}>
                        <Controller
                          name="postCode"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              required
                              size="small"
                              label="Post Code"
                            />
                          )}
                        />
                      </Grid>

                      <Grid item md={12}>
                        <Controller
                          name="address"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              required
                              multiline
                              rows={3}
                              size="small"
                              label="Address"
                            />
                          )}
                        />
                      </Grid>
                      <Grid item md={12}>
                        <Controller
                          name="notes"
                          control={control}
                          render={({ field }) => (
                            <TextField
                              {...field}
                              fullWidth
                              required
                              multiline
                              rows={3}
                              size="small"
                              label="Additional Notes"
                            />
                          )}
                        />
                      </Grid>
                    </Grid>
                  </Box>

                  <Stack sx={{ mt: 3 }} spacing={2}>
                    <Button
                      variant="blue-outlined"
                      onClick={() => {
                        scrollToTop();
                        setIsConfirm(false);
                        setLineItems([]);
                      }}
                    >
                      Go Back
                    </Button>

                    <Button
                      variant="blue"
                      type="submit"
                      // disabled={loading}

                      endIcon={
                        loading ? (
                          <CircularProgress
                            size={20}
                            sx={{
                              color: "text.main",
                            }}
                          />
                        ) : (
                          <CgArrowLongRight />
                        )
                      }
                    >
                      Request a Quote
                    </Button>
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </>
        )}
      </Container>
    </>
  );
};

export default QuotePage;

export const Head = () => (
  <>
    <title>
      Get a Quick Quote for Safety Certifications | Home Safety Cert
    </title>

    <meta
      name="title"
      content="Quick and Easy Safety Certification Quotes | Home Safety Cert"
    />
    <meta
      name="description"
      content="Get a quote for your safety certifications with Home Safety Cert. We offer Gas Safety Certificates, Electrical Certifications, EPCs, and more. Contact us for a hassle-free quote."
    />
  </>
);

// component="form"
// onSubmit={handleSubmit(onSubmit)}
