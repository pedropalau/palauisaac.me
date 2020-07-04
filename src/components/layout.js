import React from "react"
import PropTypes from "prop-types"

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Layout = ({ children }) => (
  <div className="flex flex-col justify-center min-h-screen w-full">
    <main>
      {children}
    </main>
  </div>
)

Layout.propTypes = propTypes;

export default Layout
