import React, { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { green } from "@mui/material/colors";
import { Link, navigate } from "gatsby";

const Successful = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count - 1);

      if (count < 0) {
        clearInterval(intervalId);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    if (count === 0) {
      navigate("/");
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        textAlign: "center",
        color: green[400],
        height: "calc( 100vh - 120px )",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CheckCircleOutlineIcon
        sx={{
          fontSize: 60,
          mb: 3,
        }}
      />
      <Typography
        sx={{
          fontSize: 35,
          fontWeight: 500,
        }}
      >
        Order Placed Successfully!
      </Typography>

      <Typography
        sx={{
          fontSize: 20,
          color: "text.main",
          mb: 2,
        }}
      >
        Redirecting to home page in {count} seconds.
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          mt: 3,
        }}
      >
        <Button size="small" LinkComponent={Link} to="/quote" variant="blue">
          Request Again
        </Button>
        <Button size="small" LinkComponent={Link} to="/" variant="blue">
          Visit Homepage
        </Button>
      </Stack>
    </Box>
  );
};

export default Successful;
