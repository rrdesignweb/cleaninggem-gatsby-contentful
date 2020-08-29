import React from "react"
import Nav from "../components/nav/index"
import Layout from "../components/layout/index"
import ContactSuccess from "../components/contact-form/contact-success"
import Header from "../components/header/index"
import Footer from "../components/footer/index"
import SEO from "../components/seo"

const ContactSuccessPage = () => (
  <Layout>
    <SEO title="Contact CleaningGem Melbourne" />
    <Header siteTitle="Contact Us" />
    <Nav />
    <ContactSuccess />
    <Footer />
  </Layout>
)

export default ContactSuccessPage
