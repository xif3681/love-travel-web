// import { reducer as datasources } from '@/datasources'
// import { reducer as datasets } from '@/datasets'
// import { reducer as reports } from '@/reports'


import { reducer as common } from 'src/components/store'
import { reducer as user } from '@/views/login/store'
import { reducer as home } from '@/views/home/store'
import { Home } from "src/interface/home"
import { Common } from "@/interface/common"

export interface StoreState {
  common: Common,
  user: Object,
  home: Home,

}

export default {
  // datasources,
  // datasets,
  // reports,
  common,
  user,
  home,

}
