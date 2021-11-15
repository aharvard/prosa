import React from 'react'
import { styled } from '../../stitches.config'

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',
  outline: '1px solid red',

  variants: {
    size: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
    },
  },
})
function HomePage() {
  return (
    <div>
      <Text as="h1" size="3">
        Welcome to Next.js!!
      </Text>
    </div>
  )
}

export default HomePage
