import React, { Component } from "react"
import Layout from "../components/Layout"
import styles from "../components/modules/blog.module.css"

export default class product extends Component {
  render() {
    return (
      <Layout>
        <h1>This is our products</h1>
        <p className={styles.page}>
          Llorem ipsum Llorem Llorem ipsum Llorem Llorem ipsum Llorem Llorem
          ipsum Llorem Llorem ipsum Llorem Llorem ipsum Llorem Llorem ipsum
          Llorem Llorem ipsum Llorem Llorem ipsum Llorem Llorem ipsum Llorem
          Llorem ipsum Llorem Llorem ipsum Llorem Llorem ipsum Llorem Llorem
          ipsum Llorem Llorem ipsum Llorem Llorem ipsum Llorem Llorem ipsum
          Llorem Llorem ipsum Llorem Llorem ipsum Llorem Llorem ipsum Llorem
          Llorem ipsum Llorem Llorem ipsum Llorem Llorem ipsum Llorem
        </p>
      </Layout>
    )
  }
}
