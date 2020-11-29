import React from 'react'

import { wrapper } from '@/store'
import '@/styles/globals.scss'
import 'simple-line-icons/scss/simple-line-icons.scss'

const WrappedApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(WrappedApp)
