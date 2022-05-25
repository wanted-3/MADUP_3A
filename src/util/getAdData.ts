import { useAppSelector } from '../hooks/useAppSelector'
import { getAdsData, getAdsDrop } from '../redux/slice'

const GetAdData = () => {
  const adsData = useAppSelector(getAdsData)
  const dropMenu = useAppSelector(getAdsDrop)
  // const selectDropMenu = useAppSelector()

  // formatting

  // startDate, endDate 포멧 변경
  const DateFormat = (str: string | null | undefined) => {
    let format
    if (str) {
      format = str.slice(0, 10)
    }
    return format
  }

  // 돈 단위 formatting 만원단위, 3자리 ,
  const MoneyFormat = (num: number) => {
    return Math.round(num / 10000)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  // 254500 -> 25.5 -> 25, 5를 뽑아서 25만 5천원
  // 250000 -> 25.0 -> 25, 0이 뽑히면 25만원
  const budgetFormat = (num: number) => {
    if (num < 100000) {
      return `${Math.ceil(num / 1000).toString()} 천원` // **천원
    }
    const number10 = Math.round(num / 1000) / 10 // 25.5
    const numberWhole = Math.trunc(Math.round(num / 1000) / 10) // 25
    const numberDecimal = parseFloat((number10 - numberWhole).toFixed(1)) * 10 // 5(0.5)
    return `${numberWhole}만원 ${numberDecimal === 0 ? '' : `${numberDecimal} 천원`}`
  }

  const onModify = () => {
    // eslint-disable-next-line no-console
    console.log('modify')
  }
  const formatedAdData = adsData.map((item) => {
    return {
      ...item,
      startDate: DateFormat(item.startDate),
      endDate: DateFormat(item.endDate),
      budget: budgetFormat(item.budget),
      report: {
        ...item.report,
        convValue: MoneyFormat(item.report.convValue),
        cost: MoneyFormat(item.report.cost),
      },
    }
  })

  // dropdown
  const filterdStatus = dropMenu.filter((value) => value.order === 4)
  const status = filterdStatus[0].value

  const filteredAdCardData =
    status === 'all' ? formatedAdData : formatedAdData.filter((value) => value.status === status)

  const formattingAdsData = { adsData, dropMenu, status, filteredAdCardData }
  return formattingAdsData
}

export default GetAdData
