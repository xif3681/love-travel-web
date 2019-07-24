import { Dispatch } from "redux"
import { createAction } from "redux-actions"

import { host } from '@/services/hostConfig'
import * as Service from '@/services/auth'
import * as CommonService from '@/services/common'

import { setCookie } from '@/utils/cookie'

import { CommonActions } from "@/common/store/actionTypes"
import { IUser } from "@/interface/management"
import { GlobalState } from "@/interface/state"

/**
 * pagoda登陆
 * @param params 使用票据鉴权
 */
export const pagodaLogin = (params: { ticket: string }) => async (dispatch: Dispatch) => {
  dispatch(createAction(CommonActions.COMMON_USER_TOKEN_START)())
  return Service.pagodaLogin(params)
  .then(res => {
    setCookie('quickbi_token', res.token)
    dispatch(createAction(CommonActions.COMMON_USER_TOKEN_SUCCESS)(res))
    return res.token
  })
  .catch(e => {
    dispatch(createAction(CommonActions.COMMON_USER_TOKEN_FAIL)())
  })
}

/**
 * 通用登陆
 * @param username 
 * @param password 
 */
export const login = (username: string, password: string) => async (dispatch: Dispatch) => {
  dispatch(createAction(CommonActions.COMMON_USER_TOKEN_START)())
  return Service.login(username, password)
  .then(({ token }) => {
    setCookie('quickbi_token', token)
    dispatch(createAction(CommonActions.COMMON_USER_TOKEN_SUCCESS)(token))
    return token
  })
  .catch(e => {
    dispatch(createAction(CommonActions.COMMON_USER_TOKEN_FAIL)())
  })
}

/**
 * 获取当前登陆用户信息
 */
export const loadUserCurrent = () => async (dispatch: Dispatch): Promise<IUser> => {
  const user = await Service.loadUserCurrent()
  dispatch(createAction(CommonActions.COMMON_USER_CURRENT)(user))
  return user
}

/**
 * 混合接口
 */
export const loadUserInfoMixedAccess = () => async (dispatch: Dispatch) => {
  dispatch(createAction(CommonActions.COMMON_USER_PRIVILIGE_PENDING)())
  // 测试
  return Service.loadUserInfoMixedAccess()
  .then(({ current, permissions }) => {
    dispatch(createAction(CommonActions.COMMON_USER_PRIVILIGE_SUCCESS)(permissions))
    dispatch(createAction(CommonActions.COMMON_USER_CURRENT)(current))
  })
  .catch((e) => {
    dispatch(createAction(CommonActions.COMMON_USER_PRIVILIGE_FAIL)())
    dispatch(createAction(CommonActions.COMMON_USER_CURRENT)())
  })
}

/**
 * 同时获取子目录列表和子资源列表
 * @param {string} type - 目录类型:可选值 dataSourceDirectory | dataSetDirectory | reportDirectory
 * @param {string} pid - 父目录ID
 * @param {string} sort - 排序方式，默认按name正序，可选排序'name', 'createdAt', 'creatorName'。倒叙为加"-"号，例如：-name，按名字倒叙 
 */
export const getListWithResource = (type: 'dataSourceDirectory' | 'dataSetDirectory' | 'reportDirectory', pid: string, sort: string) => (dispatch: Dispatch) => {
  return CommonService.getListWithResource(type, pid, sort)
}

// 获取水印背景图片地址
export const getMarkImgUrl = () => (dispatch: Dispatch, getState: () => GlobalState) => {
  const { username } = getState().common.userInfo
  return `${host}/user/wm/${username}`
}