// 角色成员类型<用户或者用户组>
export enum RoleMemberType {
  USER = 'user',
  USERGROUP = 'userGroup'
}
// 创建角色参数
export interface CreateRoleProps {
  name: string
  description: string
}
// 角色关联的用户或者用户组
export interface RoleRelatedMemberProps {
  aimId: string
  aimType: RoleMemberType
}
// 角色关联的用户或者用户组--包含名称
export interface RoleRelatedMemberWithName extends RoleRelatedMemberProps {
  aimName: string
  checked?: boolean
}
// 角色关联的用户或者用户组 在接口调用时的返回值
export interface RoleRelatedMemberRes {
  userOrGroups: RoleRelatedMemberWithName[]
}
// 更新角色关联的用户或者用户组 在接口调用时的传入参数
export interface UpdateRoleRelatedMemberReq {
  userOrGroups: RoleRelatedMemberProps[]
}
// 更新、删除角色成功
export interface UpdateOrDeleteSuccessRes {
  id: string
}
// 页面信息
export interface PageInfoProps {
  aimId: string
  aimName: string
  reflect: string
  checked?: boolean
  children: PageInfoProps[]
  hideCheck?: boolean
}
// 更新角色关联 的页面 在接口调用时的传入参数
export interface UpdateRoleRelatedPageReq {
  pagePermissions: string[]
}
// 角色关联的页面 在接口调用时的返回值
export interface RoleRelatedPageRes {
  pagePermissions: string[]
}