export type name = 'management'

export interface GroupSelectedProps {
  id: string;
  name?: string;
  label?: string;
  value?: string;
}
export interface IUserSingRes {
  username: string;
  chineseName: string;
  email: string;
  groupIds: GroupSelectedProps[],
}
export interface IUserCreation {
  username: string;
  chineseName: string;
  email: string;
  groupIds: string[]
}
export interface IGroupCreation {
  pid?: string;
  name: string;
}
export interface UsersParams { }

export interface UserTreeNames {
  attrNames: string[],
  tree: UserGroup[]
}

export interface UserGroup {
  id: string;
  name: string;
  children: UserGroup[]
  attrs: {
    [x: string]: any;
  };
}

export interface IUser {
  [index: string]: any;
  id: string;
  username: string;
  email: string;
  chineseName: string;
  state: 'system' | 'valid' | 'invalid' | '';
  groupIds: string[],
  createdAt: string;
  attrs?: {
    [x: string]: (string | null)[]
  }
}

export interface IUserInfo {
  users?: IUser[],
  count?: number,
  usersAndAttrs?: {
    users: IUser[],
    count: number,
    attrNames: string[]
  }
}

export interface IUsersFromGroup {
  currentGroupName: string;
  users: IUser[];
  currentGroupId: string;
}

export interface ManagementReducer {
  userInfo: IUserInfo
  userTreeNames: UserTreeNames
  groupOp: {
    creationState: 'SUCCESS' | 'FAIL' | ''
  },
  userOp: {
    creationState: 'SUCCESS' | 'FAIL' | ''
  },
  usersFromGroup: IUsersFromGroup
}

export interface groupsTreeAndAttrsProps {
  tree: UserGroup[],
  attrNames: string[]
}

export type UserStateType = 'system' | 'valid' | 'invalid'

export interface UserListProps {
  chineseName: string
  createdAt: string
  email?: string
  state: UserStateType
  id: string
  username: string
}

// 角色列表
export interface UserRoleListProps {
  createdAt: string
  description: string
  id: string
  name: string
  creatorName: string
}
// 获取角色列表接口的返回值
export interface UserRoleListPropsRes {
  count: number
  list: UserRoleListProps[]
}
// 用户组树
export interface GroupTreeListProps {
  id: string
  name: string
  children?: GroupTreeListProps[]
}
