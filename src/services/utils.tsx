import Request from './request'

// 生产唯一mongoId
export const createMongoId = () => Request.post('/mongoId', {})

// 全局搜索, 包括数据源、数据集、报表等
export const globalSearch = (keywords: string) => Request.get(`/search?keyword=${keywords}`)