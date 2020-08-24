import React from "react"
import PropTypes from "prop-types"
import "./index.scss"

const Header = ({ siteTitle }) => (
  <header className="header__wrapper container green block__spacing">
    <h1>{siteTitle}</h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header