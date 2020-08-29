import React from "react"
import Nav from "../components/nav/index"
import Featured from "../components/home-featured/index"
import HomeAbout from "../components/home-about/index"
import Blog from "../components/home-blog/index"
import Footer from "../components/footer/index"
import Layout from "../components/layout/index"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Nav />
      <Featured /> 
      <HomeAbout />
      <Blog />
      <Footer />
    </Layout>
  )
}

export default IndexPage
