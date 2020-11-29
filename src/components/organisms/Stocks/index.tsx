import React from 'react'

import { SearchItem } from '@/components/molecules'
import { Stock, StockData } from '@/store/ducks/search/types'

type Props = {
  stock: Stock
}

export function Stocks({ stock }: Props): JSX.Element {
  return (
    <div>
      {stock.data?.map((data: StockData) => (
        <SearchItem key={`${stock.id}${data.date}`} stock={data} />
      ))}
    </div>
  )
}

export default Stocks
