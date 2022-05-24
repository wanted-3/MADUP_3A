export interface IadData {
  ads: IAd[]
}

export interface IAd {
  id: number
  adType: string
  title: string
  budget: number
  status: string
  startDate: string
  endDate: string | null
  report: Report
}

interface Report {
  cost: number
  convValue: number
  roas: number
}
