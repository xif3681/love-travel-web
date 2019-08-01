import { combineReducers } from "redux"
import { handleActions } from "redux-actions"
import { ActionTypes} from "./actionTypes"
import { Home} from "src/interface/home"


export const initReducer: Home = {
  tabs : {
    count: 12,
  }



}


// 用户token信息
const tabs = handleActions({
  [ActionTypes.INCREMENT]: (state: any, { payload }) => {
    console.log(state)
    return {
      ...state,
      count: state.count + payload.num + 1
    }
  },
  [ActionTypes.DECREMENT]: (state: any, { payload }: any) => {
    return {
      ...state,
      count: state.count - 1
    }
  },
  [ActionTypes.RESET]: (state: any, { payload }) => {
    return {
      ...state,
      count: 0
    }
  }
}, initReducer.tabs)



export default combineReducers({
  tabs,
})
