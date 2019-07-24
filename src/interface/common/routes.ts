import { PageEnum, AccessInfo, TokenInfo } from './index'

export interface PrivateRouteProps {
  keys?: PageEnum[] | PageEnum // key && access 共同确定页面是否有权限
  accessInfo?: AccessInfo
  exact?: boolean
  path: string
  routes?: PrivateRouteProps[]
  requireAuth?: boolean // 默认为true
  component: any
  extraVerifyCallback?: (routes: PrivateRouteProps) => boolean // 额外的判断
  tokenInfo?: TokenInfo
}
