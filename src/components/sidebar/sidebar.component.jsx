import React from "react"
import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"

import "./sidebar.styles.scss"

const Sidebar = () => (
  <Menu>
    <div className="navbar__wrapper-mobile">
      <Link className="navbar__item-mobile" to="/services">
        Services
      </Link>
      <Link className="navbar__item-mobile" to="/testimonials">
        Testimonials
      </Link>
      <Link className="navbar__item-mobile" to="/blog">
        Blog
      </Link>
      <Link className="navbar__item-mobile" to="/contact">
        Contact
      </Link>
    </div>
  </Menu>
)

export default Sidebar
