import React from 'react'
import { storiesOf } from '@storybook/react'
import SearchForm from '@/containers/SearchForm'

storiesOf('SearchForm', module).add('Default', () => {
  return <SearchForm />
})
