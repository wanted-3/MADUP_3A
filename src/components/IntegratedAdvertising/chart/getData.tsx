import dayjs from 'dayjs'
import { Daily, dataIntegrated } from '../../../types/search.d'
import DATA from './wanted_FE_trend-data-set.json'

const getData = () => {
  // ROAS, 광고비, 노출수, 클릭수, 전환 수, 매출
  const ROAS: dataIntegrated[] = [] // roas
  const cost: dataIntegrated[] = [] // 광고비
  const imp: dataIntegrated[] = [] // 노출수
  const click: dataIntegrated[] = [] // 클릭수
  const conversion: dataIntegrated[] = [] // cvr*click/100->전환수
  const sales: dataIntegrated[] = [] // cost*roas/100->매출

  DATA.report.daily.forEach((d: Daily) => {
    const dateForm = dayjs(d.date).format('M월 D일')

    ROAS.push({ x: dateForm, y: d.roas, label: `${dateForm}, ROAS: ${d.roas}` })
    cost.push({ x: dateForm, y: d.cost, label: `${dateForm}, 광고비: ${d.cost}` })
    imp.push({ x: dateForm, y: d.imp, label: `${dateForm}, 노출수: ${d.imp}` })
    click.push({ x: dateForm, y: d.click, label: `${dateForm}, 클릭수: ${d.click}` })
    conversion.push({
      x: dateForm,
      y: Math.floor((d.cvr * d.click) / 100),
      label: `${d.date}, 전환수: ${Math.floor((d.cvr * d.click) / 100)}`,
    })
    sales.push({
      x: dateForm,
      y: Math.floor((d.cost * d.roas) / 100),
      label: `${dateForm}, 매출: ${Math.floor((d.cost * d.roas) / 100)}`,
    })
  })
  const all = [ROAS, cost, imp, click, conversion, sales]
  return { all }
}
export default getData
