import React from 'react'
import { storiesOf } from '@storybook/react'
import SearchForm from '@/components/molecules/SearchForm'

storiesOf('SearchForm', module).add('Default', () => {
  return (
    <SearchForm
      onClickMedia={() => 1}
      onClickStock={() => 1}
      selectedMedia={null}
      selectedStock={null}
    />
  )
})
