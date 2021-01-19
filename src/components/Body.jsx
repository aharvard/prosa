import React from 'react'
import PropTypes from 'prop-types'

export default function Body({ children }) {
  return <body className="bg-gray-100 min-h-screen">{children}</body>
}

Body.propTypes = {
  children: PropTypes.element.isRequired,
}
