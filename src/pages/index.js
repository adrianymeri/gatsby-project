import React from "react"
import Services from "../components/Services"
import LatestBlog from "../components/LatestBlog"
import Testimonails from "../components/Testimonails"
import Slider from "../components/Slider"
import Layout from "../components/Layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <Layout>
      <Slider />
      <Services />
      <LatestBlog />
      <Testimonails />
    </Layout>
  </>
)

export default IndexPage
