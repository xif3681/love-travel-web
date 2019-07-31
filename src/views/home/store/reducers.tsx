import { combineReducers } from "redux"
import { handleActions } from "redux-actions"
import { ActionTypes} from "./actionTypes"
import { HomeReducer} from "@/interface/views"
// import { getCookie } from "@/utils/cookie"
// import { TokenInfo, AccessInfo, LoadStatus, UserInfo } from '@/interface/common'


// export interface StoreState extends Map<keyof Store, any> {
// 	get<K extends keyof Store>(key: K): Store[K];
// }


export const initReducer: HomeReducer = {
  tabs : {
    count: 12,
  }

  // userInfo: {
  //   id: '',
  //   username: '',
  //   email: '',
  //   chineseName: '',
  //   state: '',
  //   groupIds: [],
  //   createdAt: ''
  // },
  // tokenInfo: {
  //   token: getCookie('quickbi_token'),
  //   status: LoadStatus.SUCCESS
  // },
  // accessInfo: {
  //   status: LoadStatus.PENDING,
  //   pagePermissions: []
  // }

}


// 用户token信息
const tabs = handleActions({
  [ActionTypes.INCREMENT]: (state: any, { payload }) => {
    console.log(state)
    return {
      count: state.count + payload.num + 1
    }
  },
  [ActionTypes.DECREMENT]: (state: any, { payload }: any) => {
    return {
      count: state.count - 1
    }
  },
  [ActionTypes.RESET]: (state: any, { payload }) => {
    return {
      count: 0
    }
  }
}, initReducer.tabs)

// 用户权限信息
// const accessInfo = handleActions({
//   [ActionTypes.COMMON_USER_PRIVILIGE_PENDING]: (state: any, { payload }) => {
//     return {
//       status: LoadStatus.PENDING,
//       pagePermissions: []
//     }
//   },
//   [ActionTypes.COMMON_USER_PRIVILIGE_SUCCESS]: (state: any, { payload }) => {
//     const { pagePermissions = [] } = payload
//     return {
//       status: LoadStatus.SUCCESS,
//       pagePermissions
//     }
//   },
//   [ActionTypes.COMMON_USER_PRIVILIGE_FAIL]: (state: any, { payload }) => {
//     return {
//       status: LoadStatus.FAIL,
//       pagePermissions: []
//     }
//   }
// }, initReducer.accessInfo)

export default combineReducers({
  tabs,
  // tokenInfo,
  // accessInfo
  // count
})
