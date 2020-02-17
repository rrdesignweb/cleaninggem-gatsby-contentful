import React from "react"
import Nav from "../components/nav/nav.component"
import Layout from "../components/layout/layout.component"
import Header from "../components/header/header.component"
import Footer from "../components/footer/footer.component"
import SEO from "../components/seo"

import "./contact.styles.scss"

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
