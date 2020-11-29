import React from 'react'

import { Stock } from '@/store/ducks/search/types'
import { StockCard } from '@/components/molecules'
import styles from './styles.module.scss'

type Props = {
  items: Stock[]
  onClick: (stock: Stock) => void
}

export function StockSelector({ items, onClick }: Props): JSX.Element {
  return (
    <div className={styles.stockSelector}>
      {items?.map((stock: Stock) => (
        <StockCard
          key={stock.id}
          onClick={() => onClick(stock)}
          icon={<i className="icon-graph" />}
          title={stock.title}
          subtitle={stock.description}
        />
      ))}
    </div>
  )
}

export default StockSelector
