import React from 'react'

import styles from './styles.module.scss'

type Props = {
  social: string
  symbol: string
}

export function StockItem({ social, symbol }: Props): JSX.Element {
  return (
    <p className={styles.stockItem}>
      {symbol}
      <span>{social}</span>
    </p>
  )
}

export default StockItem
