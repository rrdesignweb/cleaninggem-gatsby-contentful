import React from "react"
import facebookIcon from "../../images/facebook.svg"
import instagramIcon from "../../images/instagram.svg"

import "./index.scss"

const Footer = () => (
  <footer className="footer block__spacing">
    <div className="social">
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/cleaninggemmelbourne">
        <img className="facebook" src={facebookIcon} alt="Facebook" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cleaninggemmelbourne">
        <img className="instagram" src={instagramIcon} alt="Instagram" />
      </a>
    </div>
    <p>Copyright © 2020 CleaningGem Melbourne</p>
  </footer>
)

export default Footer
