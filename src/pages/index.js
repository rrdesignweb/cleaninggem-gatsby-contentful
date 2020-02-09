import React from "react"
import Nav from "../components/nav/nav.component"
import Featured from "../components/featured/featured.component"
import About from "../components/about/about.component"

import Layout from "../components/layout/layout.component"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Nav/>
      <Featured />
      <About />
    </Layout>
  )
}

export default IndexPage
