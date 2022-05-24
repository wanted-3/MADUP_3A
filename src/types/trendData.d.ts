interface RootObject {
  report: Report
}

export interface ItrendReport {
  daily: ItrendData[]
}

export interface ItrendData {
  imp: number
  click: number
  cost: number
  conv: number
  convValue: number
  ctr: number
  cvr: number
  cpc: number
  cpa: number
  roas: number
  date: string
}
export interface dataIntegrated {
  x: string
  y: number
  label: string
}
