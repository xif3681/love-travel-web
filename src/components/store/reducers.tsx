import { combineReducers } from "redux"
import { handleActions } from "redux-actions"
import { ActionTypes} from "./actionTypes"

import  {Common}  from "@/interface/common"


export const initReducer: Common = {
  menusCurrent: {
    current: 'home'
  },
  footerList: [{
    name: 'a'
  }]
}

const menusCurrent = handleActions({
  [ActionTypes.MENUSCURRENT]: (state: any, { payload }) => {
    return {
      current: payload.key
    }
  }
}, initReducer.menusCurrent)
const footerList = handleActions({
  [ActionTypes.MENUSCURRENT]: (state: any, { payload }) => {
    console.log(payload)
    return {
      ...state,
      footerList: payload.key
    }
  }
}, initReducer.footerList)



export default combineReducers({
  menusCurrent,
  footerList

})
