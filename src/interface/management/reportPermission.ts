
// 角色关联的报表权限列表
export interface ReportPermission {
  list: ReportPermissionItem[]
}

export interface ReportPermissionItem {
  reportId: string
  reportName: string
  accesses: string[]
  isOld?: boolean
}