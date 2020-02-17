import React from "react"
import Nav from "../components/nav/nav.component"
import Layout from "../components/layout/layout.component"
import Header from "../components/header/header.component"
import Footer from "../components/footer/footer.component"
import SEO from "../components/seo"

import "./contact.styles.scss"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <Header siteTitle="Contact Us" />
    <Nav />
    <section className="container">
      <div className="contact__form container__inner ">
        <p className="center">
          Please feel free to contact us for a hassle free quote or simply a
          general enquiry on any of our services. We look forward to hearing from you.
        </p>
        <div className="contact__form--inner">
          <form
            method="post"
            name="contact"
            action="/contact-thanks"
            data-netlify="true"
            netlify-honeypot="bot"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="field__hidden">
              <label for="bot">Don't fill this out human</label>
              <input name="bot" />
            </div>
            <div className="field__group">
              <label for="name">Full Name</label>
              <input type="text" name="name" />
            </div>
            <div className="field__group">
              <label for="email">Email*</label>
              <input type="email" name="email" />
            </div>
            <div className="field__group">
              <label for="subject">Subject</label>
              <input type="subject" name="subject" />
            </div>
            <div className="field__group">
              <label for="message">Message*</label>
              <textarea
                type="text"
                name="message"
                rows="6"
              />
            </div>
            <div className="submit">
              <button type="submit" className="btn__med">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <Footer />
  </Layout>
)

export default ContactPage
