/* eslint-disable react/prop-types */
import React from 'react'

import { globalCss } from '@stitches/react'
import Layout from '../components/Layout'

const globalStyles = globalCss({
  body: {
    margin: 0,
    background: '$background',
  },
})

export default function MyApp({ Component, pageProps }) {
  globalStyles()
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
