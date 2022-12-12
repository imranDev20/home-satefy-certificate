/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Home Safety Certificate`,
    siteUrl: `https://homesafetycert.co.uk`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      gatsbyRemarkPlugins: [
        {
          options: {
            maxWidth: 1920,
          },
          resolve: "gatsby-remark-images",
        },
      ],
      options: {
        extensions: [".mdx", ".md", ".markdown"],
      },
      resolve: "gatsby-plugin-mdx",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      options: {
        defaults: {
          formats: ["auto", "avif", "webp"],
          placeholder: "blurred",
          quality: 70,
        },
      },
      resolve: "gatsby-plugin-sharp",
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-loadable-components-ssr",
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
      resolve: "gatsby-background-image",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
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
  ],
};
