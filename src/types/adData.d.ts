export interface IAdData {
  count: number
  ads: Ad[]
}

export interface IAd {
  id: number
  adType: string
  title: string
  budget: number
  status: string
  startDate: string
  endDate?: string
  report: Report
}

export interface IReport {
  cost: number
  convValue: number
  roas: number
}
