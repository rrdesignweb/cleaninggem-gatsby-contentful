import React from "react"
import Nav from "../components/nav/index"
import Layout from "../components/layout/index"
import ContactForm from "../components/contact-form/index"
import Header from "../components/header/index"
import Footer from "../components/footer/index"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <Nav />
    <Header siteTitle="Contact Us" />
    <ContactForm />
    <Footer />
  </Layout>
)

export default ContactPage
