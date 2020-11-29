import { combineReducers } from 'redux'

import { InitialState } from '@/utils/helpers'

import { SearchList, Stock } from './ducks/search/types'
import { SocialMedia } from './ducks/socialMedia/types'
import { search, stock, socialMedia } from './ducks'

export type ApplicationState = {
  search: InitialState<SearchList>
  stock: InitialState<Stock>
  socialMedia: InitialState<SocialMedia>
}

const reducers = combineReducers({ search, stock, socialMedia })

export default reducers
