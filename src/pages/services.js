import React from "react"
import Nav from "../components/nav/nav.component"
import Layout from "../components/layout/layout.component"
import Header from "../components/header/header.component"
import Footer from "../components/footer/footer.component"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services Page" />
    <Header siteTitle="Services" />
    <Nav />
    <Footer />
  </Layout>
)

export default ServicesPage
