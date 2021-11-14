import React from 'react'
import PropTypes from 'prop-types'

export default function Heading({ level, text, className, ...props }) {
  const HeadingTag = `h${level}`
  return (
    <HeadingTag
      className={['text-2xl font-bold', className].join(' ')}
      {...props}
    >
      {text}
    </HeadingTag>
  )
}

Heading.propTypes = {
  text: PropTypes.any,
  level: PropTypes.string,
  className: PropTypes.string,
}

Heading.defaultProps = {
  text: 'Heading Text',
  level: '1',
  className: null,
}
