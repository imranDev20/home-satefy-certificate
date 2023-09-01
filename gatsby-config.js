/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  trailingSlash: `never`,
  siteMetadata: {
    title: `Home Safety Cert`,
    siteUrl: `https://homesafetycert.co.uk`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-slug",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          formats: ["auto", "avif", "webp"],
          placeholder: "blurred",
          quality: 70,
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "services",
        path: "./src/contents/services",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blogs",
        path: "./src/contents/blogs",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "hero",
        path: "./src/contents/hero",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1280,
            },
          },
        ],
      },
    },

    {
      resolve: "@slixites/gatsby-plugin-google-fonts",
      options: {
        fonts: ["jost:100,200,300,400,500,600,700,800,900"],
        display: "swap",
        preconnect: true,
        attributes: {
          rel: "stylesheet preload prefetch",
          as: "style",
        },
      },
    },

    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Sku", "Product", "Price"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
      },
    },

    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GATSBY_MEASUREMENT_ID],

        pluginConfig: {
          head: true,
        },
      },
    },
  ],
};
