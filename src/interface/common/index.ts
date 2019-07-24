import { IUser } from '../management';

export type name = 'common'

export declare type ResourceType = 'reports' | 'datasources' | 'datasets' | 'profile' | 'management'
export declare type SourceImportType = 'import' | 'file'
export interface BreadCrumbDir {
  _id: string;
  name: string;
  pid?: string;
}
export interface BreadCrumbInfo {
  id: string;
  name: string;
}
export interface BreadCrumb {
  directoryPath: BreadCrumbDir[];
  info: BreadCrumbInfo;
}

export interface DirectoryItem {
  id: string;
  name: string;
  pid: {
    id: string;
  };
  createdAt: string;
  isRoot: boolean;
  hasChild: boolean;
  creatorName: string;
}

export interface SourceItem {
  id: string;
  name: string;
  description: string;
  no: number;
  mode: SourceImportType;
  directoryId: {
    id: string;
  };
  createdAt: string;
  creatorName: string;
  updatedByName: string;
  updatedAt: string;
}

export interface SourceUnderDir {
  dirList: DirectoryItem[];
  sourceList: SourceItem[];
}
// 目录
export interface DirInterface {
  root: SourceUnderDir;
  [directoryId: string]: SourceUnderDir;
}

export interface DirTreeInterface {
  root: DirectoryItem[];
  [directoryId: string]: DirectoryItem[];
}

// 删除成功返回id
export interface DeleteItemRes {
  id: string
  [others: string]: any
}

// 所有的包含目录id和name的资源或者目录
export interface SourceWithNameAndId {
  id: string
  name?: string
}

// 页面枚举
export enum PageEnum {
  DATASOURCE = 'dataSource',
  DATASET = 'dataSet',
  REPORT = 'report',
  MANAGEMENT = 'management',
  USERANDPERMISSION = 'userAndPermission',
  USER = 'user',
  USERGROUP = 'userGroup',
  USERROLE = 'userRole',
  REPORTMANAGEMENT = 'reportManagement',
  REPORTURL = 'reportUrl',
  REPORTSTATISTIC = 'reportStatistic',
}
// 主页面枚举
export interface MaiPageProps {
  path: string
  icon: string
  label: string
  keys: PageEnum
}
// 请求状态
export enum LoadStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAIL = 'fail'
}
// token 信息
export interface TokenInfo {
  token: string
  status: LoadStatus
}
// 页面权限信息
export interface AccessInfo {
  status: LoadStatus
  pagePermissions: PageEnum[]
}

export default interface Common {
  userInfo: IUser
  tokenInfo: TokenInfo
  accessInfo: AccessInfo
}