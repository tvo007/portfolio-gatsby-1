import React from 'react'
import PropTypes from 'prop-types'
import TestMenu from '../components/TopMenu'

const Layout = ({ children }) => (
  <div>
    <TestMenu /> 
      {children}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout