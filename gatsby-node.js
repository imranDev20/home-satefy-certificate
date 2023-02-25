const path = require("path");
const serviceDetails = path.resolve(`./src/templates/service-details.js`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "services" } }
        sort: { childMdx: { frontmatter: { id: ASC } } }
      ) {
        nodes {
          childMdx {
            internal {
              contentFilePath
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors);
  }

  const services = result.data.allFile.nodes;

  services.forEach((node) => {
    createPage({
      path: "/services" + node.childMdx.fields.slug + "/",
      component: `${serviceDetails}?__contentFilePath=${node.childMdx.internal.contentFilePath}`,
      context: { slug: node.childMdx.fields.slug },
    });
  });
};
