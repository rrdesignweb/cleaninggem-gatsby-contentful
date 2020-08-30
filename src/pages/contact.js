import React from "react"
import Nav from "../components/nav/index"
import Layout from "../components/layout/index"
import ContactForm from "../components/contact-form/index"
import Header from "../components/header/index"
import Footer from "../components/footer/index"
import SEO from "../components/seo"
import MapImage from "../images/melbourne-map@2x.png"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <Nav />
    <Header siteTitle="Contact Us" />
    <div className="contact-map-image" style={{height:`340px`,backgroundPosition: `center center`, backgroundSize: `cover`, backgroundImage:`url(${MapImage})`}}></div>
    <ContactForm />
    <Footer />
  </Layout>
)

export default ContactPage
