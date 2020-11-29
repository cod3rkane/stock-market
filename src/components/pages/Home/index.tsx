import { Page } from '@/components/templates'
import SearchItem from '@/components/molecules/SearchItem'
import SearchForm from '@/components/molecules/SearchForm'

export default function Home(): JSX.Element {
  return (
    <Page>
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
    </Page>
  )
}
