import { Dispatch } from "redux"
import { createAction } from "redux-actions"
import { ActionTypes } from "./actionTypes"
import * as HomeService from '@/services/home'
import * as OrderService from '@/services/order'

export const handleClick = (e: any) => (dispatch: Dispatch) => {
  dispatch(createAction(ActionTypes.MENUSCURRENT)(e))
}
export const handleTabChange = (e: any) => async (dispatch: Dispatch) => {
  // const weekorder = await OrderService.queryWeekOrgOrder('szpszx')
  // console.log(weekorder)
  const roominfo = await HomeService.roomList()
  console.log(roominfo)
  dispatch(createAction(ActionTypes.ROOMINFO)(e))
}