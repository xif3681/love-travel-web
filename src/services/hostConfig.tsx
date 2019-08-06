const productionHost = 'api/v1'
const testHost = 'http://localhost:3000/'

const uploadProductionHost = 'api/v1'
const uploadTestHost = 'http://localhost:3000/'

export const host =  process.env.NODE_ENV === 'production' ? productionHost: testHost;
export const uploadHost = process.env.NODE_ENV === 'production' ? uploadProductionHost: uploadTestHost;
