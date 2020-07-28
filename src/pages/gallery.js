import React from "react"
import Gallery from "../gallery/Gallery"
import Images from "../gallery/Images"
import Layout from "../components/Layout"

const gallery = () => {
  return (
    <Layout>
      <Gallery />
      <Images />
    </Layout>
  )
}

export default gallery
