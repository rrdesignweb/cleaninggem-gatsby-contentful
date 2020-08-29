import React from "react"

const ContactForm = () => (
  <section className="ContactForm container">
    <div className="contact__form container__inner ">
      <p className="center">
        Please feel free to contact us to request a hassle free quote or simply
        a general enquiry on any of our services. We look forward to hearing
        from you.
      </p>
      <div className="contact__form--inner">
        <form
          method="post"
          name="contact"
          action="/contact-success"
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
              <span className="required">Full Name</span>
              <input type="text" name="name" placeholder="Your name" required/>
            </label>
          </div>
          <div className="field__group">
            <label>
              <span className="required">Email</span>
              <input type="email" name="email" placeholder="your@email.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
            </label>
          </div>
          <div className="field__group">
            <label>
              <span >Subject</span>
              <input type="subject" name="subject" placeholder="Requesting a quote"/>
            </label>
          </div>
          <div className="field__group">
            <label>
              <span className="required">Message</span>
              <textarea type="text" placeholder="Please enter your enquiry..." name="message" rows="12" required />
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
)

export default ContactForm
