import Head from 'next/head'

import SearchItem from '@/components/molecules/SearchItem'
import SearchForm from '@/components/molecules/SearchForm'
import Header from '@/components/organisms/Header'

export default function Home(): JSX.Element {
  return (
    <main>
      <Head>
        <title>The Wolf of Wall Street</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SearchForm />
      <SearchItem
        stock={{
          id: '123',
          title: 'LMIN',
          price: {
            currency: 'USD',
            amount: 1005,
            decimals: 58,
          },
          picture: '',
          description: 'description',
          date: '2020/11/29',
          socialMediaCount: 89990,
        }}
      />
      <SearchItem
        stock={{
          id: '123',
          title: 'LMIN',
          price: {
            currency: 'USD',
            amount: 1005,
            decimals: 58,
          },
          picture: '',
          description: 'description',
          date: '2020/11/30',
          socialMediaCount: 100,
        }}
      />
    </main>
  )
}
