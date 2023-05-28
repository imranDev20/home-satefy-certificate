import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { CgArrowLongRight } from "react-icons/cg";
import { graphql, useStaticQuery } from "gatsby";

export default function PricingTable() {
  const data = useStaticQuery(graphql`
    query PricingPageQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "services" } }
        sort: { childMdx: { frontmatter: { id: ASC } } }
      ) {
        nodes {
          id
          childMdx {
            frontmatter {
              id
              title
              package
              price
              icon {
                publicURL
              }
              detailedPackage {
                name
                price
              }
              additionalPackage {
                name
                price
              }
            }
          }
        }
      }
    }
  `);

  const priceData = data.allFile.nodes;
  console.log(priceData);

  const Center = ({ children, sx }) => {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", ...sx }}>
        {children}
      </Box>
    );
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "#F7F7F7",
        py: 10,
      }}
    >
      <Container>
        {priceData.map((item) => {
          const { title, icon, detailedPackage, additionalPackage } =
            item.childMdx.frontmatter;
          return (
            <Card
              elevation={0}
              sx={{
                mx: "auto",
                maxWidth: 700,
                mb: 10,
                borderRadius: 0,
                boxShadow: "0 0 10px 0 rgba(43,52,59,.1)",
              }}
            >
              <CardHeader
                sx={{ backgroundColor: "background.main" }}
                titleTypographyProps={{
                  sx: {
                    fontSize: 20,
                    textAlign: "center",
                    color: "black.main",
                  },
                }}
                title={title}
              />
              <CardContent
                sx={{
                  p: 0,
                }}
              >
                <Center sx={{ my: 3 }}>
                  <img src={icon.publicURL} style={{ width: 70 }} />
                </Center>

                <Box sx={{ mb: 2 }}>
                  {detailedPackage?.map((pack) => (
                    <Box
                      sx={{
                        color: "text.main",
                        py: 1,
                        borderBottom: "1px solid",
                        borderBottomColor: "#F1F1F1",
                        "&:last-of-type": {
                          borderBottom: "none",
                        },
                        px: 3,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>{pack.name}</Typography>
                      <Typography
                        sx={{
                          color: "primary.main",
                          fontWeight: 600,
                        }}
                      >
                        - {pack.price ? `£${pack.price}` : "Quote Price"}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {additionalPackage && additionalPackage.length > 0 && (
                  <Typography
                    sx={{
                      px: 3,
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: 500,
                    }}
                  >
                    Additional Services
                  </Typography>
                )}

                <Box sx={{ mb: 4, mt: 2 }}>
                  {additionalPackage?.map((pack) => (
                    <Box
                      sx={{
                        color: "text.main",
                        py: 1,
                        borderBottom: "1px solid",
                        borderBottomColor: "#F1F1F1",
                        "&:last-of-type": {
                          borderBottom: "none",
                        },
                        px: 3,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>{pack.name}</Typography>
                      <Typography
                        sx={{
                          color: "primary.main",
                          fontWeight: 600,
                          textAlign: "right",
                        }}
                      >
                        - {pack.price ? `£${pack.price}` : "Quote Price"}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Center>
                  <Button
                    endIcon={<CgArrowLongRight />}
                    variant="blue-outlined"
                  >
                    Get Started
                  </Button>
                </Center>
              </CardContent>
            </Card>
          );
        })}
      </Container>
    </Box>
  );
}
