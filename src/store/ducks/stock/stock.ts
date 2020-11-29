import produce from 'immer'
import { Dispatch } from 'redux'

import { simpleAction, SimpleAction, makeInitialState } from '@/utils/helpers'
import { Stock } from '../search/types'

export const STOCK_SELECTED = '@app/STOCK_SELECTED'
export const STOCK_SELECTED_SUCCESS = '@app/STOCK_SELECTED_SUCCESS'
export const STOCK_SELECTED_FAILURE = '@app/STOCK_SELECTED_FAILURE'

export const initialState = makeInitialState<Stock>(null)

export default function reducer(
  state = initialState,
  action: SimpleAction<Stock>
): any {
  return produce(state, (draft) => {
    switch (action.type) {
      case STOCK_SELECTED: {
        draft.error = false
        draft.loading = true
        break
      }
      case STOCK_SELECTED_SUCCESS: {
        draft.data = action.payload
        draft.loading = false
        break
      }
      case STOCK_SELECTED_FAILURE: {
        draft.error = true
        draft.loading = false
        break
      }
      default:
    }
  })
}

export const selectStock = simpleAction(STOCK_SELECTED)
export const selectStockSuccess = simpleAction(STOCK_SELECTED_SUCCESS)
export const selectStockFailure = simpleAction(STOCK_SELECTED_FAILURE)

export const selectStockAction = (stock: Stock) => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch(selectStock())

  try {
    dispatch(selectStockSuccess(stock))
  } catch {
    dispatch(selectStockFailure())
  }
}
