const productionHost = '/n/api'
const testHost = 'http://118.89.18.229:8888/api'

const uploadProductionHost = '/j/v1/api'
const uploadTestHost = 'http://118.89.18.229:7001/v1/api'

export const host =  process.env.NODE_ENV === 'production' ? productionHost: testHost;
export const uploadHost = process.env.NODE_ENV === 'production' ? uploadProductionHost: uploadTestHost;
