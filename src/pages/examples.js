import React from "react"
import Header from "../examples/Header"
/* this was older methis before hooks cames */
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../components/Layout"
/* Method above is used for page Queries */
import { graphql } from "gatsby"

export const examples = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <h1>Example</h1>
      <Header />
      <HeaderStatic />
    </Layout>
  )
}

/* This is PageQuery data seeder, in props we will reciewve data with site */
/* We have to export our variable data */
export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`
export default examples
