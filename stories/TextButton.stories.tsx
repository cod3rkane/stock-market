import React from 'react'
import { storiesOf } from '@storybook/react'
import TextButton from '@/components/atoms/TextButton'

storiesOf('TextButton', module).add('Default', () => {
  return (
    <TextButton icon="icon-plus" onClick={() => ({})}>
      Search Stock
    </TextButton>
  )
})
