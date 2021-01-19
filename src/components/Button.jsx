import React from 'react'
import PropTypes from 'prop-types'

export default function Button({
  primary,
  label,
  className,
  onClick,
  ...props
}) {
  const mode = primary
    ? 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 rounded-md'
    : 'bg-purple-50 text-purple-600 hover:bg-gray-50 focus:ring-purple-500 focus:ring-offset-purple-200 rounded-sm'
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'text-base font-semibold py-2 px-4 shadow focus:outline-none focus:ring-2  focus:ring-offset-2 ',
        mode,
        className,
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

Button.defaultProps = {
  primary: false,
  onClick: undefined,
  className: null,
}
