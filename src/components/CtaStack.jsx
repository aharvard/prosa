import React from 'react'
import PropTypes from 'prop-types'
import Heading from './Heading'
import Button from './Button'

export default function CtaStack({
  headingText,
  blurbText,
  eyebrowText,
  ctaText,
  className,
}) {
  return (
    <div className={['p-20 bg-white', className].join(' ')}>
      <div className="text-center prose prose-sm m-auto">
        <p className="uppercase">{eyebrowText}</p>
        <Heading text={headingText} />
        <p>{blurbText}</p>
        <Button label={ctaText} />
      </div>
    </div>
  )
}

CtaStack.propTypes = {
  eyebrowText: PropTypes.string,
  headingText: PropTypes.string,
  blurbText: PropTypes.string,
  ctaText: PropTypes.string,
  className: PropTypes.string,
}

CtaStack.defaultProps = {
  eyebrowText: 'Eyebrow',
  headingText: 'Heading',
  blurbText: 'Blurb',
  ctaText: 'Call to Action',
  className: null,
}
