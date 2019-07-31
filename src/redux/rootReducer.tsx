// import { reducer as datasources } from '@/datasources'
// import { reducer as datasets } from '@/datasets'
// import { reducer as reports } from '@/reports'

import { reducer as common } from '@/views/login/store'
import { reducer as home } from '@/views/home/store'
import { HomeReducer} from "@/interface/views"

export interface StoreState {
  common: Object,
  home: HomeReducer
}

export default {
  // datasources,
  // datasets,
  // reports,
  common,
  home
}
