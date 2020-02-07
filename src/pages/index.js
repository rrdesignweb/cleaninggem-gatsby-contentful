import React from "react"
import Featured from "../components/featured/featured.component"
import Nav from "../components/nav/nav.component"

import Layout from "../components/layout/layout.component"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Nav/>
      <Featured />
    </Layout>
  )
}

export default IndexPage
