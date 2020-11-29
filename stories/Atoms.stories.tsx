import React from 'react'
import { storiesOf } from '@storybook/react'

import { Rating, StockItem } from '@/components/atoms'

const rating = storiesOf('Rating', module)

rating.add('Default', () => {
  return <Rating value={0} />
})

rating.add('3 Stars', () => {
  return <Rating value={3} />
})

rating.add('5 Stars', () => {
  return <Rating value={5} />
})

const stockItem = storiesOf('StockItem', module)

stockItem.add('Default', () => {
  return <StockItem social="Twitter" symbol="APPL" />
})
