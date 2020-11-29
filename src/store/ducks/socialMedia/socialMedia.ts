import produce from 'immer'
import { Dispatch } from 'redux'

import { simpleAction, SimpleAction, makeInitialState } from '@/utils/helpers'
import { SocialMedia } from './types'

export const SOCIAL_MEDIA_SELECTED = '@app/SOCIAL_MEDIA_SELECTED'
export const SOCIAL_MEDIA_SELECTED_SUCCESS =
  '@app/SOCIAL_MEDIA_SELECTED_SUCCESS'
export const SOCIAL_MEDIA_SELECTED_FAILURE =
  '@app/SOCIAL_MEDIA_SELECTED_FAILURE'

export const initialState = makeInitialState<SocialMedia>(null)

export default function reducer(
  state = initialState,
  action: SimpleAction<SocialMedia>
): any {
  return produce(state, (draft) => {
    switch (action.type) {
      case SOCIAL_MEDIA_SELECTED: {
        draft.error = false
        draft.loading = true
        break
      }
      case SOCIAL_MEDIA_SELECTED_SUCCESS: {
        draft.data = action.payload
        draft.loading = false
        break
      }
      case SOCIAL_MEDIA_SELECTED_FAILURE: {
        draft.error = true
        draft.loading = false
        break
      }
      default:
    }
  })
}

export const selectMedia = simpleAction(SOCIAL_MEDIA_SELECTED)
export const selectMediaSuccess = simpleAction(SOCIAL_MEDIA_SELECTED_SUCCESS)
export const selectMediaFailure = simpleAction(SOCIAL_MEDIA_SELECTED_FAILURE)

export const selectMediaAction = (media: SocialMedia) => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch(selectMedia())

  try {
    dispatch(selectMediaSuccess(media))
  } catch {
    dispatch(selectMediaFailure())
  }
}
