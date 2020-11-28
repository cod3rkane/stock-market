import { combineReducers } from 'redux'

import { InitialState } from '@/utils/helpers'

import { StockList } from './ducks/search/types'
import { search } from './ducks'

export type ApplicationState = {
  search: InitialState<StockList>
}

const reducers = combineReducers({ search })

export default reducers
