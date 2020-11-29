import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  Modal,
  SearchForm,
  SearchItem,
  StockCard,
} from '@/components/molecules'

const modal = storiesOf('Modal', module)

modal.add('Default', () => {
  return (
    <Modal title="Title" onClose={() => 1} isOpen>
      Hello!
    </Modal>
  )
})

const form = storiesOf('SearchForm', module)

export const stock_sample = {
  id: '1X',
  title: 'AAPL',
  description: 'Apple Inc.',
  data: [
    {
      price: {
        currency: 'USD',
        amount: 0,
        decimals: 0,
      },
      date: new Intl.DateTimeFormat('en-CA').format(
        new Date().setDate(new Date().getDate())
      ),
      socialMediaCount: 0,
      buyRating: 0,
      sellRating: 0,
      holdRating: 0,
    },
    {
      price: {
        currency: 'USD',
        amount: 0,
        decimals: 0,
      },
      date: new Intl.DateTimeFormat('en-CA').format(
        new Date().setDate(new Date().getDate() + 1)
      ),
      socialMediaCount: 0,
      buyRating: 0,
      sellRating: 0,
      holdRating: 0,
    },
    {
      price: {
        currency: 'USD',
        amount: 0,
        decimals: 0,
      },
      date: new Intl.DateTimeFormat('en-CA').format(
        new Date().setDate(new Date().getDate() + 2)
      ),
      socialMediaCount: 0,
      buyRating: 0,
      sellRating: 0,
      holdRating: 0,
    },
    {
      price: {
        currency: 'USD',
        amount: 0,
        decimals: 0,
      },
      date: new Intl.DateTimeFormat('en-CA').format(
        new Date().setDate(new Date().getDate() + 3)
      ),
      socialMediaCount: 0,
      buyRating: 0,
      sellRating: 0,
      holdRating: 0,
    },
    {
      price: {
        currency: 'USD',
        amount: 0,
        decimals: 0,
      },
      date: new Intl.DateTimeFormat('en-CA').format(
        new Date().setDate(new Date().getDate() + 4)
      ),
      socialMediaCount: 0,
      buyRating: 0,
      sellRating: 0,
      holdRating: 0,
    },
    {
      price: {
        currency: 'USD',
        amount: 0,
        decimals: 0,
      },
      date: new Intl.DateTimeFormat('en-CA').format(
        new Date().setDate(new Date().getDate() + 5)
      ),
      socialMediaCount: 0,
      buyRating: 0,
      sellRating: 0,
      holdRating: 0,
    },
    {
      price: {
        currency: 'USD',
        amount: 0,
        decimals: 0,
      },
      date: new Intl.DateTimeFormat('en-CA').format(
        new Date().setDate(new Date().getDate() + 6)
      ),
      socialMediaCount: 0,
      buyRating: 0,
      sellRating: 0,
      holdRating: 0,
    },
    {
      price: {
        currency: 'USD',
        amount: 0,
        decimals: 0,
      },
      date: new Intl.DateTimeFormat('en-CA').format(
        new Date().setDate(new Date().getDate() + 7)
      ),
      socialMediaCount: 0,
      buyRating: 0,
      sellRating: 0,
      holdRating: 0,
    },
    {
      price: {
        currency: 'USD',
        amount: 0,
        decimals: 0,
      },
      date: new Intl.DateTimeFormat('en-CA').format(
        new Date().setDate(new Date().getDate() + 8)
      ),
      socialMediaCount: 0,
      buyRating: 0,
      sellRating: 0,
      holdRating: 0,
    },
    {
      price: {
        currency: 'USD',
        amount: 0,
        decimals: 0,
      },
      date: new Intl.DateTimeFormat('en-CA').format(
        new Date().setDate(new Date().getDate() + 9)
      ),
      socialMediaCount: 0,
      buyRating: 0,
      sellRating: 0,
      holdRating: 0,
    },
    {
      price: {
        currency: 'USD',
        amount: 0,
        decimals: 0,
      },
      date: new Intl.DateTimeFormat('en-CA').format(
        new Date().setDate(new Date().getDate() + 10)
      ),
      socialMediaCount: 0,
      buyRating: 0,
      sellRating: 0,
      holdRating: 0,
    },
  ],
}

export const media_sample = {
  id: '1D',
  title: 'Twitter',
  description: 'twitter.com',
  icon: 'icon-social-twitter',
}

form.add('Default', () => {
  return (
    <SearchForm
      selectedStock={stock_sample}
      selectedMedia={media_sample}
      onClickStock={() => 1}
      onClickMedia={() => 1}
    />
  )
})

const item = storiesOf('SearchItem', module)

item.add('Default', () => {
  return <SearchItem stock={stock_sample.data[0]} />
})

const card = storiesOf('StockCard', module)

card.add('Default', () => {
  return (
    <StockCard
      onClick={() => 1}
      icon={<i className="icon-graph" />}
      title="title"
      subtitle="subtitle"
    />
  )
})
