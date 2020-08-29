import React from "react"
import Nav from "../components/nav/index"
import Layout from "../components/layout/index"
import Header from "../components/header/index"
import Footer from "../components/footer/index"
import SEO from "../components/seo"
// import GoogleMap from "../components/google-map/index"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <Nav />
    <Header siteTitle="Contact Us" />
    
      <section className="container">
      <div className="contact__form container__inner ">
        <p className="center">
          Please feel free to contact us to request a hassle free quote or simply a
          general enquiry on any of our services. We look forward to hearing
          from you.
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
              <label>
                Don't fill this out human
                <input name="bot" />
              </label>
            </div>
            <div className="field__group">
              <label>
                Full name
                <input type="text" name="name" />
              </label>
            </div>
            <div className="field__group">
              <label>
                Email*
                <input type="email" name="email" />
              </label>
            </div>
            <div className="field__group">
              <label>
                Subject
                <input type="subject" name="subject" />
              </label>
            </div>
            <div className="field__group">
              <label>
                Message*
                <textarea type="text" name="message" rows="6" />
              </label>
            </div>
            <div className="" data-netlify-recaptcha="true"></div>
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
