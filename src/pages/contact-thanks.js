import React from "react"
import Nav from "../components/nav/index"
import Layout from "../components/layout/index"
import Header from "../components/header/index"
import Footer from "../components/footer/index"
import SEO from "../components/seo"

import "../scss/partials/contact.scss"

const ThanksPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <Header siteTitle="Contact Us" />
    <Nav />
    <div className="contact__header">
      <div className="contact__thanks center">
        <h2>Thank you! we'll be in contact with you soon</h2>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default ThanksPage
