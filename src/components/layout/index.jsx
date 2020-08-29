import React from "react"
import PropTypes from "prop-types"
import ContactTabs from "../contact-tabs/index";

//Global Styles
import "../../scss/styles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <ContactTabs />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
