import React from "react"
import Layout from "../components/Layout"
import { MainButton } from "../components/ui/button"

export default function Home() {
  return (
    <Layout>
      <h1>Hello from gatsby!</h1>
      <MainButton primary onClick={() => console.log("test")}>
        Click me
      </MainButton>
    </Layout>
  )
}
