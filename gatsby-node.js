const path = require("path");
// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query GetShopProducts {
      shop: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `);
  result.data.shop.nodes.forEach(element => {
    createPage({
      path: `/shop/${element.slug}`,
      component: path.resolve("src/templates/shop-template.js"),
      context: {
        slug: element.slug,
      },
    });
  });

  const teamResult = await graphql(`
    {
      team: allContentfulTeam {
        nodes {
          slug
        }
      }
    }
  `);
  teamResult.data.team.nodes.forEach(member => {
    createPage({
      path: `/team/${member.slug}`,
      component: path.resolve("src/templates/TeamTemplate.js"),
      context: {
        slug: member.slug,
      },
    });
  });
};
