import React, { useLayoutEffect, useState } from "react"
import { Link } from "gatsby"
import { window } from "browser-monads"
import logo from "../../images/cleaninggem-logo.svg"
import phoneIcon from "../../images/phone-icon.svg"
import "./nav.styles.scss"
import Sidebar from "../../components/sidebar/sidebar.component"

function useWindowSize() {
  const [size, setSize] = useState(0)
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth)
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])
  return size
}

const Nav = () => {
  const width = useWindowSize()
  if (width > 960) {
    return (
      <nav>
        <div className="nav__wrapper">
          <div className="nav__items">
            <a className="nav__item--left" href="/">
              <img
                src={logo}
                alt="CleaningGem Logo"
                className="nav__item--logo"
              />
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
        </div>
      </nav>
    )
  } else {
    return (
      <nav>
        <div className="nav__wrapper">
          <div className="nav__items">
            <a className="nav__item--center" href="/">
              <img
                src={logo}
                alt="CleaningGem Logo"
                className="nav__item--logo"
              />
            </a>
            <a href="tel:0427877811">
              <img src={phoneIcon} alt="Phone 0427 877 811" />
            </a>
          </div>
          <Sidebar />
        </div>
      </nav>
    )
  }
}

export default Nav
