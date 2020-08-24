import React from "react"
import Nav from "../components/nav/index"
import Layout from "../components/layout/index"
import Header from "../components/header/index"
import Footer from "../components/footer/index"
import SEO from "../components/seo"
import Services from "../components/services/index"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services Page" />
    <Header siteTitle="Services" />
    <Nav />
    <Services />
    <Footer />
  </Layout>
)

export default ServicesPage
