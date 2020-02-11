import React from "react"
import { Link } from "gatsby"
import { window } from "browser-monads"
import logo from "../../images/cleaninggem-logo.svg"
import phoneIcon from "../../images/phone-icon.svg"
import "./nav.styles.scss"

const Nav = () => (
  <nav>
    <div className="nav__items">
      <a className="nav__item--left" href="/">
        <img src={logo} alt="CleaningGem Logo" className="nav__item--logo" />
      </a>
      <Link
        className={
          window.location.href.indexOf("services") > 0
            ? "nav__item--link active"
            : "nav__item--link"
        }
        to="/services"
      >
        Services
      </Link>
      <Link
        className={
          window.location.href.indexOf("testimonials") > 0
            ? "nav__item--link active"
            : "nav__item--link"
        }
        to="/testimonials"
      >
        Testimonials
      </Link>
      <Link
        className={
          window.location.href.indexOf("blog") > 0 ||
          window.location.href.indexOf("category") > 0
            ? "nav__item--link active"
            : "nav__item--link"
        }
        to="/blog"
      >
        Blog
      </Link>
      <Link
        className={
          window.location.href.indexOf("contact") > 0
            ? "nav__item--link active"
            : "nav__item--link"
        }
        to="/contact"
      >
        Contact
      </Link>
      <a href="tel:0427877811" className="nav__item--phone">
        <img src={phoneIcon} alt="Phone 0427 877 811" />
        &nbsp;0427 877 811
      </a>

    </div>
  </nav>
)

export default Nav
