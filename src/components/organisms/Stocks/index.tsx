import React, { useEffect, useState } from 'react'

import { SearchItem } from '@/components/molecules'
import { Stock, StockData } from '@/store/ducks/search/types'
import { SocialMedia } from '@/store/ducks/socialMedia/types'
import {
  stockPriceGenerator,
  socialMediaCountGenerator,
  recommendationAlgorithm,
} from '@/utils/helpers'

type Props = {
  stock: Stock
  media: SocialMedia
}

export function Stocks({ stock, media }: Props): JSX.Element {
  const [data, setData] = useState([])
  useEffect(() => {
    const formated = stock.data.map((e: StockData) => ({
      ...e,
      socialMediaCount: Math.round(
        socialMediaCountGenerator(stock, media) * 1000
      ),
      buyRating: recommendationAlgorithm(stock, media) * 5,
      sellRating: recommendationAlgorithm(stock, media) * 5,
      holdRating: recommendationAlgorithm(stock, media) * 5,
      price: {
        ...e.price,
        amount: stockPriceGenerator(stock, []) * 1000,
      },
    }))
    setData(formated)
  }, [stock, media])

  return (
    <div>
      {data?.map((data: StockData) => (
        <SearchItem key={`${stock.id}${data.date}`} stock={data} />
      ))}
    </div>
  )
}

export default Stocks
