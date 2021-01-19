import React from 'react'
import PropTypes from 'prop-types'

export default function Leaf({ leaf, children, attributes }) {
  if (leaf.bold === true) {
    return <strong {...attributes}>{children}</strong>
  }
  return <span {...attributes}>{children}</span>
}

Leaf.propTypes = {
  leaf: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  attributes: PropTypes.object.isRequired,
}
