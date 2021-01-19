import React from 'react'
import PropTypes from 'prop-types'

export default function CodeElement({ children, attributes }) {
  return (
    <pre {...attributes}>
      <code>{children}</code>
    </pre>
  )
}

CodeElement.propTypes = {
  children: PropTypes.element.isRequired,
  attributes: PropTypes.object.isRequired,
}
