import React from 'react'

import { Stock } from '@/store/ducks/search/types'
import Rating from '@/components/atoms/Rating'
import styles from './styles.module.scss'

type Props = {
  stock: Stock
}

export function SearchItem({ stock }: Props): JSX.Element {
  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: stock.price.currency,
  }).format(stock.price.amount)

  return (
    <div className={styles.searchitem}>
      <ul>
        <li>
          <p>
            <Rating value={3} />
          </p>
          <p>Buy</p>
        </li>
        <li>
          <p>
            <Rating value={5} />
          </p>
          <p>Sell</p>
        </li>
        <li>
          <p>
            <Rating value={1} />
          </p>
          <p>Hold</p>
        </li>
        <li>
          <p>{stock.socialMediaCount}</p>
          <p>Posts</p>
        </li>
        <li>
          <p>{price}</p>
          <p>{stock.date}</p>
        </li>
      </ul>
    </div>
  )
}

export default SearchItem
