import React from 'react'
import Head from 'next/head'

import { Header } from '@/components/organisms'

type Props = {
  children?: JSX.Element | JSX.Element[]
}

export function Page({ children }: Props): JSX.Element {
  return (
    <main>
      <Head>
        <title>The Wolf of Wall Street</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{children}</div>
    </main>
  )
}

export default Page
