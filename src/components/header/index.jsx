import React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
    <header className="Header header__wrapper container green-bg block__spacing">
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
