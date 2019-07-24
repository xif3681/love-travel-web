export enum ReportPermissionAimType {
  USER = 'user',
  USER_GROUP = 'userGroup',
  USER_ROLE = 'userRole',
}

// 用户、角色在SelectList里面的统一结构
export interface SourceListProps {
  aimId: string
  aimName: string
  aimType: ReportPermissionAimType
  checked?: boolean
  [key: string]: any
}

// 用户组树转换后结构
export interface GroupTreeListConvertedProps {
  aimId: string
  aimName: string
  aimType: ReportPermissionAimType
  children?: GroupTreeListConvertedProps[]
}
// 获取列表（用户、角色）参数
export interface loadSourceProps {
  page?: number
  search?: string
  pageSize?: number
  reset?: boolean
}

// 用户权限