import { handleActions } from "redux-actions"
import { CommonActions } from "./actionTypes"
import { combineReducers } from "redux"
import { getCookie } from "@/utils/cookie"
import { TokenInfo, AccessInfo, LoadStatus, UserInfo } from '@/interface/common'

interface CommonReducer {
  userInfo: UserInfo
  tokenInfo: TokenInfo
  accessInfo: AccessInfo
}

export const initReducer: CommonReducer = {
  userInfo: {
    id: '',
    username: '',
    email: '',
    chineseName: '',
    state: '',
    groupIds: [],
    createdAt: ''
  },
  tokenInfo: {
    token: getCookie('quickbi_token'),
    status: LoadStatus.SUCCESS
  },
  accessInfo: {
    status: LoadStatus.PENDING,
    pagePermissions: []
  }
}

// 用户信息
const userInfo = handleActions({
  [CommonActions.COMMON_USER_CURRENT]: (state: any, { payload }) => {
    return payload ? payload : initReducer.userInfo
  }
}, initReducer.userInfo)

// 用户token信息
const tokenInfo = handleActions({
  [CommonActions.COMMON_USER_TOKEN_START]: (state: any, { payload }) => {
    return {
      token: '',
      status: LoadStatus.PENDING
    }
  },
  [CommonActions.COMMON_USER_TOKEN_SUCCESS]: (state: any, { payload }: any) => {
    return {
      token: payload ? payload : '',
      status: LoadStatus.SUCCESS
    }
  },
  [CommonActions.COMMON_USER_TOKEN_FAIL]: (state: any, { payload }) => {
    return {
      token: '',
      status: LoadStatus.FAIL
    }
  }
}, initReducer.tokenInfo)

// 用户权限信息
const accessInfo = handleActions({
  [CommonActions.COMMON_USER_PRIVILIGE_PENDING]: (state: any, { payload }) => {
    return {
      status: LoadStatus.PENDING,
      pagePermissions: []
    }
  },
  [CommonActions.COMMON_USER_PRIVILIGE_SUCCESS]: (state: any, { payload }) => {
    const { pagePermissions = [] } = payload
    return {
      status: LoadStatus.SUCCESS,
      pagePermissions
    }
  },
  [CommonActions.COMMON_USER_PRIVILIGE_FAIL]: (state: any, { payload }) => {
    return {
      status: LoadStatus.FAIL,
      pagePermissions: []
    }
  }
}, initReducer.accessInfo)

export default combineReducers({
  userInfo,
  tokenInfo,
  accessInfo
})
