import React from 'react'
import PropTypes from 'prop-types'

export default function DefaultElement({ children, attributes }) {
  return <p {...attributes}>{children}</p>
}

DefaultElement.propTypes = {
  children: PropTypes.element.isRequired,
  attributes: PropTypes.object.isRequired,
}
