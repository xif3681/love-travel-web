/**
 * 虚拟字段
 */

export type FieldTypes = 'text' | 'number' | 'date'

export interface VirtualFirldItem {
  fieldName: string
  no: number
  originFieldName?: string
  type: FieldTypes
}

export interface VirtualFirldFields {
  cols: VirtualFirldItem[]
  virtualField: VirtualFirldItem[]
  virtualIndicator: VirtualFirldItem[]
}

export interface VirtualFirldFunItem {
  argsArr: string[][]
  chineseName: string
  description: string
  fillText: string
  name: string
  returnType: string
  type: FieldTypes
}

export interface VirtualFirldFunctions {
  date: VirtualFirldFunItem[]
  number: VirtualFirldFunItem[]
  text: VirtualFirldFunItem[]
  aggregate: VirtualFirldFunItem[]
}

export interface VirtualFirld {
  fields: VirtualFirldFields
  functions: VirtualFirldFunctions
}

export const VIRTUALFIRLDITEM_TYPES: VirtualFirldItem = {
  fieldName: '',
  no: 0,
  originFieldName: '',
  type: 'text'
}

export const VIRTUALFIRLDFIELDS_TYPES: VirtualFirldFields = {
  cols: [VIRTUALFIRLDITEM_TYPES],
  virtualField: [VIRTUALFIRLDITEM_TYPES],
  virtualIndicator: [VIRTUALFIRLDITEM_TYPES]
}

export const VIRTUALFIRLDFUNITEM_TYPES: VirtualFirldFunItem = {
  argsArr: [[]],
  chineseName: '',
  description: '',
  fillText: '',
  name: '',
  returnType: '',
  type: 'text'
}

export const VIRTUALFIRLDFUN_TYPES: VirtualFirldFunctions = {
  date: [VIRTUALFIRLDFUNITEM_TYPES],
  number: [VIRTUALFIRLDFUNITEM_TYPES],
  text: [VIRTUALFIRLDFUNITEM_TYPES],
  aggregate: [VIRTUALFIRLDFUNITEM_TYPES]
}

export const VIRTUALFIRLD_TYPES: VirtualFirld = {
  fields: VIRTUALFIRLDFIELDS_TYPES,
  functions: VIRTUALFIRLDFUN_TYPES
}

/* 接口参数和返回值 */

export interface ReqInterface {
  fieldName: string
  type?: FieldTypes
  expr: string
  isIndicator: boolean
}

export interface ResListInfo {
  cols: Array<{fieldName: string}>
  rows: Array<{[key: string]: any}>
}

export interface ResAggregateInfo {
  fieldName: string
  value: any
}

export interface ResInterFace {
  listInfo: ResListInfo
  aggregateInfo: ResAggregateInfo
}

export const REQUEST_DEFAULT: ReqInterface = {
  fieldName: '',
  expr: '',
  isIndicator: false
}

export const RESPONSE_DEFAULT: ResInterFace = {
  listInfo: {
    cols: [{fieldName: 'default'}],
    rows: [{default: ''}]
  },
  aggregateInfo: {
    fieldName: '',
    value: ''
  }
}
