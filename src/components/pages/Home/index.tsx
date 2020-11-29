import React, { useState } from 'react'
import { connect } from 'react-redux'

import { SearchForm, Modal } from '@/components/molecules'
import { Stocks, StockSelector, MediaSelector } from '@/components/organisms'
import { Page } from '@/components/templates'
import { Stock } from '@/store/ducks/search/types'
import { ApplicationState } from '@/store/reducers'
import { searchAction } from '@/store/ducks/search/search'
import { selectStockAction } from '@/store/ducks/stock/stock'
import { selectMediaAction } from '@/store/ducks/socialMedia/socialMedia'
import { SocialMedia } from '@/store/ducks/socialMedia/types'

type Props = {
  stock: Stock
  stocks: Stock[]
  medias: SocialMedia[]
  media: SocialMedia
  loading: boolean
  onSelectStock: (stock: Stock) => void
  onSelectMedia: (media: SocialMedia) => void
}

export function Home({
  stock,
  loading,
  stocks,
  onSelectStock,
  onSelectMedia,
  media,
  medias,
}: Props): JSX.Element {
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const onClickSearchStock = () => {
    setModalOpen(true)
    setModalContent('stock')
  }
  const onClickSearchMedia = () => {
    setModalOpen(true)
    setModalContent('media')
  }
  const onClickStock = (stock: Stock) => {
    onSelectStock(stock)
    setModalOpen(false)
  }
  const onClickMedia = (media: SocialMedia) => {
    onSelectMedia(media)
    setModalOpen(false)
  }

  return (
    <Page>
      <SearchForm
        selectedStock={stock}
        selectedMedia={media}
        onClickStock={onClickSearchStock}
        onClickMedia={onClickSearchMedia}
      />
      {loading ? (
        <span>Loading</span>
      ) : (
        <>{stock ? <Stocks stock={stock} /> : <span>No Items</span>}</>
      )}
      <Modal
        title={
          modalContent === 'stock' ? 'Select Stock' : 'Select Social Media'
        }
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      >
        {modalContent === 'stock' && (
          <StockSelector items={stocks} onClick={onClickStock} />
        )}
        {modalContent === 'media' && (
          <MediaSelector items={medias} onClick={onClickMedia} />
        )}
      </Modal>
    </Page>
  )
}

Home.getInitialProps = async ({ store, query }) => {
  return store.dispatch(searchAction(query.search))
}

const mapStateToProps = ({ search, stock, socialMedia }: ApplicationState) => ({
  stocks: search.data.stockList,
  medias: search.data.socialMediaList,
  stock: stock.data,
  media: socialMedia.data,
  loading: search.loading,
})

const mapDispatchToProps = (dispatch) => ({
  onSelectStock: (stock: Stock) => dispatch(selectStockAction(stock)),
  onSelectMedia: (media: SocialMedia) => dispatch(selectMediaAction(media)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
