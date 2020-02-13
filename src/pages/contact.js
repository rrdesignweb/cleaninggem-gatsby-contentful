import React from "react"
import Nav from "../components/nav/nav.component"
import Layout from "../components/layout/layout.component"
import Footer from "../components/footer/footer.component"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <Nav />
    <section className="block__spacing container">
      <h1>Contact</h1>
      <p>Contact Form and Map Page</p>
    </section>
    <Footer />
  </Layout>
)

export default ContactPage
