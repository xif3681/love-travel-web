import { Dispatch } from "redux"
import { createAction } from "redux-actions"
import { ActionTypes } from "./actionTypes"
import * as Service from '@/services/home'

export const handleClick = (e: any) => (dispatch: Dispatch) => {
  dispatch(createAction(ActionTypes.MENUSCURRENT)(e))
}
export const handleTabChange = (e: any) => async (dispatch: Dispatch) => {
  // const roominfo = await Service.loadUserCurrent(e)
  dispatch(createAction(ActionTypes.ROOMINFO)(e))
}