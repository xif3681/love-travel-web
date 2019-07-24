import Request from './request'

// 同时获取子目录列表和子资源列表
export const getListWithResource = (type: string, pid: string, sort: string) => Request.get(`/${type}/listWithResource`)