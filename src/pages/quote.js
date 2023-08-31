import React, { useEffect, useState } from "react";
import Layout from "../components/global/layout";
import { graphql, useStaticQuery } from "gatsby";
import { convertToBgImage } from "gbimage-bridge";
import PageHeader from "../components/global/page-header";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import { Box, Checkbox, FormControl, Stack } from "@mui/material";
import { getFutureTime } from "../utils/functions";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { green } from "@mui/material/colors";

const Quote = ({ location }) => {
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

  const [isGas, setIsGas] = useState(true);
  const [gasItem, setGasItem] = useState("");
  const [isEicr, setIsEicr] = useState(true);
  const [eicrItem, setEicrItem] = useState("");
  const [isEpc, setIsEpc] = useState(true);
  const [epcItem, setEpcItem] = useState("");
  const [date, setDate] = useState(getFutureTime());
  const image = data.file.childImageSharp.gatsbyImageData;
  const bgImage = convertToBgImage(image);

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

  const gasProducts = data.prices.nodes.filter((item) =>
    item.product.name.split(" ").includes("Gas")
  );

  const eicrProducts = data.prices.nodes.filter((item) =>
    item.product.name.split(" ").includes("EICR")
  );

  return (
    <Layout location={location}>
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
        <Card elevation={2} sx={{ p: 2, width: "100%", maxWidth: 600 }}>
          <CardHeader title="Please Provide Your Details" />

          <CardContent>
            <Stack
              component="form"
              spacing={3}
              sx={{ my: 2, maxWidth: 500, mx: "auto" }}
            >
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
                {/* <FormHelperText>Be careful</FormHelperText> */}
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
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="0-3 bedrooms"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="4-6 bedrooms"
                      />
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
                      {/* <FormLabel id="demo-radio-buttons-group-label">
                        Is your area inside TFL Zone 1 or outside TFL Zone 5?
                      </FormLabel> */}
                      <RadioGroup>
                        <FormControlLabel
                          value="not-applicable"
                          control={<Radio />}
                          label="Not applicable"
                        />
                        <FormControlLabel
                          value="inside-tfl1"
                          control={<Radio />}
                          label="Inside TFL Zone 1"
                        />
                        <FormControlLabel
                          value="outside-tfl5"
                          control={<Radio />}
                          label="Outside TFL Zone 5"
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
                        <RadioGroup>
                          <FormControlLabel
                            value="24"
                            control={<Radio />}
                            label="In 24 Hours"
                          />
                          <FormControlLabel
                            value="48"
                            control={<Radio />}
                            label="In 48 Hours"
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
                                  disabled
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

              <Button variant="blue">Request a Quote</Button>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </Layout>
  );
};

export default Quote;

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
