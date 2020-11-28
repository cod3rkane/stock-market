import React from 'react'

import { wrapper } from '@/store'
import '@/styles/globals.scss'

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)
