/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Tutorial",
    description: "Some random description",
    author: "@DBlach",
    data: ["item 1", "item 2"],
    person: { name: "peter", age: 32 },
  },
  plugins: [`gatsby-plugin-styled-components`],
}
