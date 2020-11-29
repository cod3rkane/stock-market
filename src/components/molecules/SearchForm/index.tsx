import React from 'react'

import TextButton from '@/components/atoms/TextButton'
import StockItem from '@/components/atoms/StockItem'
import styles from './styles.module.scss'

export function SearchForm(): JSX.Element {
  return (
    <div className={styles.searchForm}>
      <div className={styles.container}>
        <section>
          <div>
            <TextButton icon="icon-plus" onClick={() => 1}>
              Search Stock
            </TextButton>
          </div>
          <div className={styles.selectedStock}>
            <p>Selected:</p>
            <StockItem symbol="LMIN" social="Twitter" />
          </div>
          <div>
            <TextButton icon="icon-info" onClick={() => 1}>
              Select Social Media
            </TextButton>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SearchForm
