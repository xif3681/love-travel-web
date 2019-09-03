import { Action } from "redux-actions"
import { Map } from 'immutable'
import { HomeActionTypes } from '@/constants/actionTypes'

export default (state=Map({}), { type, payload }: Action<{ id: string, data?: any, error?: Error }>) => {
  switch (type) {
    case HomeActionTypes.FETCH_TASK_START:
      return state.merge({
        [payload.id]: Map({
            isLoading: true,
            error: undefined
        })
      })
    case HomeActionTypes.FETCH_TASK_SUCCESS:
      return state.merge({
        [payload.id]: Map({
            isLoading: false,
            error: undefined,
            data: payload.data
        })
      })
    case HomeActionTypes.FETCH_TASK_ERROR:
      return state.merge({
        [payload.id]: Map({
            isLoading: false,
            error: payload.error
        })
      })
    default:
      return state
  }
}