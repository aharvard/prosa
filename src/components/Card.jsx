import React from 'react'
import PropTypes from 'prop-types'

export default function Card({ children }) {
  return <div className="bg-white shadow rounded p-8">{children}</div>
}

Card.propTypes = {
  children: PropTypes.element.isRequired,
}
