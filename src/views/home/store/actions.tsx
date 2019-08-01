import { Dispatch } from "redux"
import { createAction } from "redux-actions"
import { ActionTypes } from "./actionTypes"


export const increment = () => (dispatch: Dispatch) => {
  dispatch(createAction(ActionTypes.INCREMENT)({num: 2}))
}
export const decrement = () => (dispatch: Dispatch) => {
  dispatch(createAction(ActionTypes.DECREMENT)())
}
export const reset = () => (dispatch: Dispatch) => {
  dispatch(createAction(ActionTypes.RESET)())
}
export const handleClick = (e: any) => (dispatch: Dispatch) => {
  dispatch(createAction(ActionTypes.TABCURRENT)(e))
}
