import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Container } from "@mui/material";
import Heading from "../global/heading";
import TableRowCompo from "./table-row";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function PricingTable() {
  const gasPackages = [
    { id: 1, name: "Gas meter + Pipe work", price: 60 },
    {
      id: 2,
      name: "Gas meter+Pipe work+ 1 Gas appliance (Boiler, Cooker or Fireplace)",
      price: 70,
    },
    {
      id: 3,
      name: "Gas meter + Pipe work+ 2 Gas appliances (Boiler, Cooker or Fireplace)",
      price: 80,
    },
    {
      id: 4,
      name: "Gas meter + Pipe work+ 3 Gas appliances (Boiler, Cooker & Fireplace)",
      price: 90,
    },
    {
      id: 5,
      name: "Boiler service & check‑up ( Less than 5 years old boilers)",
      price: 90,
      additional: true,
    },
    {
      id: 6,
      name: "Boiler service & check‑up ( Less than 10 years old boilers)",
      price: 130,
      additional: true,
    },
    {
      id: 7,
      name: "Boiler service & check‑up ( Over 10 years old boilers)",
      price: 180,
      additional: true,
    },
    {
      id: 8,
      name: "CO alarm & detector (Battery Powered)- Supply & installation",
      price: 60,
      additional: true,
    },
    {
      id: 9,
      name: "CO alarm & detector (Mains powered)- Supply & installation ",
      price: 140,
      additional: true,
    },

    {
      id: 10,
      name: "Cooker installation & leak check",
      price: 120,
      additional: true,
    },
    {
      id: 11,
      name: "Boiler installation (Supply, installation & certification)- Complete Job",
      price: "Quote Price",
      additional: true,
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#F7F7F7",
        py: 10,
      }}
    >
      <Container>
        <Heading sx={{ textAlign: "center", mb: 5 }}>Our Pricing Plans</Heading>
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            boxShadow: "0 0 10px 0 rgba(43,52,59,.1)",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Service Name</TableCell>
                <TableCell align="center">Detailed</TableCell>
                <TableCell align="center">Price (VAT Included)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRowCompo name="GAS" packages={gasPackages} />
              {/* <TableRowCompo name="Electric" packages={gasPackages} />
              <TableRowCompo name="EPC" packages={gasPackages} />
              <TableRowCompo name="PAT" packages={gasPackages} />
              <TableRowCompo name="Emergency Light" packages={gasPackages} />
              <TableRowCompo name="Fire Alarm" packages={gasPackages} />
              <TableRowCompo
                name="Fire Risk Assessment"
                packages={gasPackages}
              />
              <TableRowCompo name="HMO" packages={gasPackages} /> */}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}
