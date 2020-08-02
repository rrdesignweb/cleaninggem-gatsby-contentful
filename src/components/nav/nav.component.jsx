import React, { useState } from "react"
import logo from "../../images/cleaninggem-logo.svg"
import phoneIcon from "../../images/phone-icon.svg"
import "./nav.styles.scss"
import { Link } from "gatsby"
import Sidebar from "../../components/sidebar/sidebar.component"

const Nav = () => {
  const [open, setOpenMenu] = useState(false)
  return (
    <nav>
      <div className="nav__wrapper">
        <div className="nav__items">
          <span
            className="nav__item--mobile-menu"
            onClick={() => {
              setOpenMenu(!open)
            }}
          >
            &#9776;
          </span>
          <div className="nav__item--logo">
            <a href="/" title="CleaningGem Home">
              <img src={logo} alt="CleaningGem Logo" />
            </a>
          </div>
          <div className="nav__item--links-container">
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
            <a className="nav__item--phone" href="tel:0427877811">
              <img src={phoneIcon} alt="Phone 0427 877 811" />
              <span className="nav__item--phone-number">0427 877 811</span>
            </a>
          </div>
        </div>
        <Sidebar open={open} setOpenMenu={setOpenMenu}/>
      </div>
    </nav>
  )
}

export default Nav
