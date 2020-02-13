import React from "react"
import Nav from "../components/nav/nav.component"
import Layout from "../components/layout/layout.component"
import Footer from "../components/footer/footer.component"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services Page" />
   
    <Nav />
    <section className="block__spacing container">
      <h1>Services</h1>
      <p>Services Page</p>
    </section>
    <Footer />
  </Layout>
)

export default ServicesPage
