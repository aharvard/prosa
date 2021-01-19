import React from 'react'
import PropTypes from 'prop-types'
import Heading from './Heading'
import Container from './Container'

export default function Hero({ headingText, blurbText }) {
  return (
    <div className="bg-white  text-center  py-20 min-w-full">
      <Container>
        <div className="prose prose-xl m-auto">
          <Heading text={headingText} />
          <p>{blurbText}</p>
        </div>
      </Container>
    </div>
  )
}

Hero.propTypes = {
  headingText: PropTypes.string,
  blurbText: PropTypes.string,
}

Hero.defaultProps = {
  headingText: 'Welcome to Prōsa',
  blurbText:
    'Prōsa transforms the challenge of teaching and learning how to write professional documents into an intuitive, inspiring experience for both instructors and students.',
}
