import React from "react"
import { Link } from "gatsby"

const Sidebar = ({ open, setOpenMenu }) => {
  return (
    <div id="sidebar" className={`Sidebar ${open ? "active" : ""}`}>
      <span
        role="button"
        className="sidebar-closebtn"
        onClick={() => {
          setOpenMenu(!open)
        }}
      >
        &times;
      </span>
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
  )
}

export default Sidebar
