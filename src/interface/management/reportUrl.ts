
export interface ReportUrlList {
  reportUrls: ReportUrlItem[]
  count: number
}

// 业务报表url数据
export interface ReportUrlItem {
  createdAt: string
  creatorName: string
  enable: boolean
  id: string
  reportId: { id: string }
  reportName: string
  reportPageId: string
  reportPageName: string
  updatedAt: string
  urlKey: string
}

// 报表数据
export interface ReportSearchItem {
  id: string
  match: boolean
  name: string
  children: ReportSearchItem[]
}