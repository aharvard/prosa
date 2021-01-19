import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Container from './Container'

export default function Header({ isAuth }) {
  return (
    <header className="bg-white shadow">
      <Container>
        <div className="relative flex items-center justify-between h-16">
          <div className="font-bold text-2xl">Prōsa</div>

          {isAuth ? (
            <Button size="small" label="Log out" />
          ) : (
            <div>
              <Button primary size="small" label="Sign up" />
              <Button size="small" label="Log in" className="ml-4" />
            </div>
          )}
        </div>
      </Container>
    </header>
  )
}

Header.propTypes = {
  isAuth: PropTypes.bool,
}

Header.defaultProps = {
  isAuth: false,
}
