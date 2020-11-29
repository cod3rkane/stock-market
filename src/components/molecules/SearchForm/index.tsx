import React from 'react'

import TextButton from '@/components/atoms/TextButton'
import StockItem from '@/components/atoms/StockItem'
import { Stock } from '@/store/ducks/search/types'
import { SocialMedia } from '@/store/ducks/socialMedia/types'
import styles from './styles.module.scss'

type Props = {
  onClickStock: () => void
  onClickMedia: () => void
  selectedStock: Stock
  selectedMedia: SocialMedia
}

export function SearchForm({
  onClickMedia,
  onClickStock,
  selectedStock,
  selectedMedia,
}: Props): JSX.Element {
  return (
    <div className={styles.searchForm}>
      <div className={styles.container}>
        <section>
          <div>
            <TextButton icon="icon-plus" onClick={onClickStock}>
              Search Stock
            </TextButton>
          </div>
          <div className={styles.selectedStock}>
            <p>Selected:</p>
            <StockItem
              symbol={selectedStock?.title}
              social={selectedMedia?.title}
            />
          </div>
          <div>
            <TextButton icon="icon-info" onClick={onClickMedia}>
              Select Social Media
            </TextButton>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SearchForm
