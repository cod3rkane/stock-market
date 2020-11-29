import React from 'react'

import { StockItem } from '@/components/atoms'
import styles from './styles.module.scss'

type Props = {
  icon?: JSX.Element
  title: string
  subtitle: string
  onClick: () => void
}

export function StockCard({
  icon,
  title,
  subtitle,
  onClick,
}: Props): JSX.Element {
  return (
    <div className={styles.stockCard} onClick={onClick}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <StockItem symbol={title} social={subtitle} />
    </div>
  )
}

export default StockCard
