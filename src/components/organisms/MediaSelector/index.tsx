import React from 'react'

import { SocialMedia } from '@/store/ducks/socialMedia/types'
import { StockCard } from '@/components/molecules'
import styles from './styles.module.scss'

type Props = {
  items: SocialMedia[]
  onClick: (media: SocialMedia) => void
}

export function MediaSelector({ items, onClick }: Props): JSX.Element {
  return (
    <div className={styles.mediaSelector}>
      {items?.map((media: SocialMedia) => (
        <StockCard
          key={media.id}
          onClick={() => onClick(media)}
          icon={<i className={media.icon} />}
          title={media.title}
          subtitle={media.description}
        />
      ))}
    </div>
  )
}

export default MediaSelector
