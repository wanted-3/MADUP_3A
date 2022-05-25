import dayjs from 'dayjs'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getTrendads } from '../../../redux/slice'
import { dataIntegrated, ItrendData } from '../../../types/trendData.d'

const GetData = () => {
  const DATA = useAppSelector(getTrendads)
  // ROAS, 광고비, 노출수, 클릭수, 전환 수, 매출
  const ROAS: dataIntegrated[] = [] // roas
  const cost: dataIntegrated[] = [] // 광고비
  const imp: dataIntegrated[] = [] // 노출수
  const click: dataIntegrated[] = [] // 클릭수
  const conversion: dataIntegrated[] = [] // cvr*click->전환수
  const sales: dataIntegrated[] = [] // cost*roas/100->매출
  // ROAS = (해당 광고로부터의 매출 / 광고 비용 ) x 100
  // https://www.i-boss.co.kr/ab-6141-52669
  DATA.forEach((d: ItrendData) => {
    const dateForm = dayjs(d.date).format('M월 D일')
    ROAS.push({ x: dateForm, y: d.roas, label: `${dateForm}, ROAS: ${d.roas}` })
    cost.push({ x: dateForm, y: d.cost, label: `${dateForm}, 광고비: ${d.cost}` })
    imp.push({ x: dateForm, y: d.imp, label: `${dateForm}, 노출수: ${d.imp}` })
    click.push({ x: dateForm, y: d.click, label: `${dateForm}, 클릭수: ${d.click}` })
    conversion.push({
      x: dateForm,
      y: Math.floor((d.cvr * d.click) / 100),
      label: `${d.date}, 전환수: ${Math.floor(d.cvr * d.click)}`,
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
export default GetData
