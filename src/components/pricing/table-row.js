import { TableCell, TableRow } from "@mui/material";
import React from "react";

function TableRowCompo({ packages, name }) {
  const additional = packages.filter((val) => val.additional);
  const main = packages.filter((val) => !val.additional);
  console.log(additional.length);
  return (
    <>
      {packages?.length > 0 ? (
        <>
          <TableRow>
            <TableCell
              component="th"
              scope="row"
              rowSpan={packages.length + 1}
              sx={{
                borderRight: "1px solid",
                borderColor: "#E0E0E0",
                width: "20%",
              }}
              align="center"
            >
              {name}
            </TableCell>
            <TableCell
              align="left"
              sx={{
                width: "60%",
                borderRight: "1px solid",
                borderColor: "#E0E0E0",
              }}
            >
              {packages[0].name}
            </TableCell>
            <TableCell align="center" sx={{ width: "60%" }}>
              £{packages[0].price}
            </TableCell>
          </TableRow>
          {main.slice(1).map((item) => (
            <TableRow>
              <TableCell
                align="left"
                sx={{
                  width: "60%",
                  borderRight: "1px solid",
                  borderColor: "#E0E0E0",
                }}
              >
                {item.name}
              </TableCell>
              <TableCell align="center">£{item.price}</TableCell>
            </TableRow>
          ))}

          {additional.length > 0 ? (
            <>
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    borderRight: "1px solid",
                    borderRightColor: "#E0E0E0",
                    width: "60%",
                    fontWeight: 600,
                  }}
                  align="center"
                >
                  Additional Services
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                ></TableCell>
              </TableRow>

              {additional.map((item) => (
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{
                      width: "60%",
                      borderRight: "1px solid",
                      borderColor: "#E0E0E0",
                    }}
                  >
                    {item.name}
                  </TableCell>
                  <TableCell align="center">
                    {typeof item.price === "number"
                      ? `£${item.price}`
                      : item.price}
                  </TableCell>
                </TableRow>
              ))}
            </>
          ) : null}
        </>
      ) : null}
    </>
  );
}

export default TableRowCompo;
