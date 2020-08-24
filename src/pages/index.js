import React from "react"
import Nav from "../components/nav/index"
import Featured from "../components/home-featured/index"
import About from "../components/home-about/index"
import Blog from "../components/home-blog/index"
import Footer from "../components/footer/index"
import Layout from "../components/layout/index"
import SEO from "../components/seo"
import "../scss/partials/home.scss"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Nav />
      <Featured /> 
      <About />
      <Blog />
      <Footer />
    </Layout>
  )
}

export default IndexPage
