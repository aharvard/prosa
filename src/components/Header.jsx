import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '../../stitches.config'
import Button from './Button'
import Container from './Container'

const StyledHeader = styled('header', {
  fontFamily: '$system',
  color: '$hiContrast',
  outline: '1px solid red',
})

export const Header = ({ isAuth }) => {
  console.log(Object.entries(theme.colors))

  return (
    <StyledHeader>
      <Container>
        {/* {JSON.stringify(theme.colors)} */}

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
    </StyledHeader>
  )
}

Header.propTypes = {
  isAuth: PropTypes.bool,
}

Header.defaultProps = {
  isAuth: false,
}
