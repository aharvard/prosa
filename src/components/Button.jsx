import React from 'react'
import PropTypes from 'prop-types'
import Icon from './Icon'

export default function Button({
  primary,
  label,
  className,
  rounded,
  onClick,
  icon,
  hideText,
  ...props
}) {
  const mode = primary
    ? 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 '
    : 'bg-purple-50 text-purple-600 hover:bg-gray-50 focus:ring-purple-500 focus:ring-offset-purple-200'

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={[
        'text-base focus:z-10 relative inline-flex items-center font-semibold py-2 px-4 shadow focus:outline-none focus:ring-2 focus:ring-offset-2 ',
        mode,
        rounded && 'rounded-md',
        className,
      ].join(' ')}
      {...props}
    >
      {icon && (
        <Icon name={icon} className={`text-sm h-4 ${!hideText && 'pr-3'}`} />
      )}
      {!hideText && label}
    </button>
  )
}

Button.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  className: PropTypes.string,
  hideText: PropTypes.bool,
  rounded: PropTypes.bool,
}

Button.defaultProps = {
  primary: false,
  onClick: undefined,
  className: null,
  hideText: false,
  icon: null,
  rounded: true,
}
