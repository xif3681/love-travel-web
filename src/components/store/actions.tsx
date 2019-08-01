import { Dispatch } from "redux"
import { createAction } from "redux-actions"
import { ActionTypes } from "./actionTypes"

export const handleClick = (e: any) => (dispatch: Dispatch) => {
  dispatch(createAction(ActionTypes.MENUSCURRENT)(e))
}