import { AccountCircle, Category } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import Heading from "../global/heading";
import { theme } from "../global/layout";
import Paragraph from "../global/paragraph";

export default function Blogs() {
  const data = useStaticQuery(graphql`
    query HomeBlogQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "blogs" } }
        sort: { childMdx: { frontmatter: { id: DESC } } }
        limit: 3
      ) {
        nodes {
          childMdx {
            frontmatter {
              title
              id
              author
              excerpt
              category
              featuredImage {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  const blogs = data?.allFile.nodes;

  return (
    <Container sx={{ my: 15 }}>
      <Heading sx={{ textAlign: "center", mb: 2 }}>
        Get Update From Our Journal
      </Heading>
      <Paragraph sx={{ maxWidth: 650, mx: "auto", textAlign: "center", mb: 4 }}>
        Keep a log of every topic idea that comes your way. Some of given below.
        You never know when you’re going to be stumped by the question “What
        should I do now?”
      </Paragraph>
      <Grid container spacing={3}>
        {blogs.map((blog) => {
          const { title, id, excerpt, featuredImage, author, category } =
            blog.childMdx.frontmatter;
          return (
            <Grid key={id} item md={4} sm={6} xs={12}>
              <Card
                sx={{
                  boxShadow: "0 0 10px 0 rgba(0,0,0,.1)",
                }}
                elevation={0}
              >
                <GatsbyImage
                  image={featuredImage.childImageSharp.gatsbyImageData}
                  alt={title}
                />
                <CardContent sx={{ p: "20px" }}>
                  <Box
                    sx={{
                      display: "flex",
                      mb: 1,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                      <AccountCircle
                        sx={{ fontSize: 17, mr: 0.5, color: "secondary.main" }}
                      />
                      <Typography
                        sx={{ ...theme.typography.body2, fontSize: 14 }}
                      >
                        {author}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mr: 3 }}>
                      <Category
                        sx={{ fontSize: 17, mr: 0.5, color: "secondary.main" }}
                      />
                      <Typography
                        sx={{ ...theme.typography.body2, fontSize: 14 }}
                      >
                        {category}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {excerpt}
                  </Typography>
                </CardContent>
                <Divider sx={{ my: 1 }} />
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Button
                    sx={{ px: 1.5 }}
                    endIcon={<CgArrowLongRight />}
                    size="small"
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
