export const HomeActionTypes = {
  INCREMENT: '@@honme/INCREMENT', 
  DECREMENT: '@@honme/DECREMENT',
  RESET: '@@home/RESET',
  TABCURRENT: '@@home/TABCURRENT',

  FETCH_TASK_START: '@@task/FETCH_TASK_START',
  FETCH_TASK_SUCCESS: '@@task/FETCH_TASK_SUCCESS',
  FETCH_TASK_ERROR: '@@task/FETCH_TASK_ERROR',
}
export const UserActionTypes = {
  USER_CURRENT: '@@user/USER_CURRENT', // 获取用户信息

  USER_TOKEN_START: '@@user/USER_TOKEN_START',
  USER_TOKEN_SUCCESS: '@@user/USER_TOKEN_SUCCESS',
  USER_TOKEN_FAIL: '@@user/USER_TOKEN_FAIL',

  USER_PRIVILIGE_PENDING: '@@user/USER_PRIVILIGE_PENDING', // 获取用户权限信息
  USER_PRIVILIGE_SUCCESS: '@@user/USER_PRIVILIGE_SUCCESS',
  USER_PRIVILIGE_FAIL: '@@user/USER_PRIVILIGE_FAIL',
}

export const CommmonActionTypes = {
  MENUSCURRENT: '@@COMMON/MENUSCURRENT',
  FOOTERLIST: '@@COMMON/FOOTERLIST',
  ROOMINFO: '@@COMMON/ROOMINFO',
}