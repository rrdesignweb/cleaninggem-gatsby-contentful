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
      <div className="contact__form ">
        <p>
          Please feel free to contact us for a hassle free quote or simply a
          general enquiry on any of our services.<br/>We look forward to hearing from you.
        </p>
     
        <div className="inner">
          <form
            method="post"
            name="contact"
            action="/thanks"
            data-netlify="true"
            netlify-honeypot="bot"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="field__hidden">
              <label for="bot">
                Don't fill this out human
                <input name="bot" />
              </label>
            </div>
            <div className="field__group">
              <label for="name">
                Name
                <input type="text" name="name" placeholder="Your Name" />
              </label>
            </div>
            <div className="field__group">
              <label for="email">
                Email
                <input type="email" name="email" placeholder="Your Email *" />
              </label>
            </div>
            <div className="field__group">
              <label for="subject">
                Subject
                <input type="subject" name="subject" placeholder="Subject" />
              </label>
            </div>
            <div className="field__group">
              <label for="message">
                Message
                <textarea
                  type="text"
                  name="message"
                  rows="6"
                  placeholder="Your Message *"
                />
              </label>
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
