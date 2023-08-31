import React from "react";
import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import {
  BsPerson,
  BsPhone,
  BsEnvelope,
  BsSignpostSplit,
  BsChatSquareQuote,
} from "react-icons/bs";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";

function Form() {
  return (
    <Grid container spacing={2}>
      <Grid item md={6} xs={12}>
        <TextField
          fullWidth
          placeholder="Your Name"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <BsPerson />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          fullWidth
          placeholder="Your Number"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <BsPhone />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          fullWidth
          placeholder="Your Email"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <BsEnvelope />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <TextField
          fullWidth
          placeholder="Enter Zip Code"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <BsSignpostSplit />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          placeholder="Message..."
          variant="outlined"
          fullWidth
          multiline
          sx={{
            ".MuiInputBase-root": {
              display: "flex",
              alignItems: "start",
            },
          }}
          minRows={5}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start" sx={{ mt: 1.8 }}>
                <BsChatSquareQuote />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item md={6} xs={12}>
        <Button
          disabled
          fullWidth
          variant="blue"
          color="primary"
          endIcon={<ArrowCircleRightRoundedIcon />}
        >
          Submit Request
        </Button>
      </Grid>
    </Grid>
  );
}

export default Form;
