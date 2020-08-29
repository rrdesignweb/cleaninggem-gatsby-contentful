import React from "react"
import phoneIconWhite from "../../images/phone-icon-white.svg"
import emailIconWhite from "../../images/email-icon-white.svg"

const ContactTabs = () => (
  <div className="ContactTabs">
    <div className="phone-tab">
      <div className="phone-tab-info">
        <a title="phone" href="teL:0427877811">
          0427 877 811
        </a>
      </div>
      <div className="phone-tab-toggle phone-up">
        <img src={phoneIconWhite} alt="phone"/>
      </div>
    </div>
    <div className="email-tab">
      <div className="email-tab-info">
        <a href="/contact">
          <img src={emailIconWhite} alt="email"/>
        </a>
      </div>
    </div>
  </div>
)

export default ContactTabs
