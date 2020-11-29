import React from 'react'
import { storiesOf } from '@storybook/react'

import { MediaSelector, StockSelector, Stocks } from '@/components/organisms'
import { media_sample, stock_sample } from './Molecules.stories'

const mediaSelector = storiesOf('MediaSelector', module)

mediaSelector.add('Default', () => {
  return <MediaSelector items={[media_sample]} onClick={() => 1} />
})

const stockSelector = storiesOf('StockSelector', module)

stockSelector.add('Default', () => {
  return <StockSelector items={[stock_sample]} onClick={() => 1} />
})

const stocks = storiesOf('Stocks', module)

stocks.add('Default', () => {
  return <Stocks stock={stock_sample} media={media_sample} />
})
