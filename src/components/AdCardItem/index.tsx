import styles from './adCardItem.module.scss'

const AdCardItem = ({ value }: any): JSX.Element => {
  // startDate, endDate 포멧 변경
  const DateFormat = (str: string | null) => {
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
  // console.log(parseFloat((b - a).toFixed(1)) * 10) // js 계산 오류
  const budgetFormat = (num: number) => {
    if (num < 100000) {
      return `${Math.ceil(num / 1000).toString()} 천원` // **천원
    }
    const number10 = Math.round(num / 1000) / 10 // 25.5
    const numberWhole = Math.trunc(Math.round(num / 1000) / 10) // 25
    const numberDecimal = parseFloat((number10 - numberWhole).toFixed(1)) * 10 // 5(0.5)
    return `${numberWhole}만원 ${numberDecimal === 0 ? '' : `${numberDecimal} 천원`}`
  }

  console.log(value.budget)
  // formatting 된 data
  const ItemValue = {
    ...value,
    startDate: DateFormat(value.startDate),
    endDate: DateFormat(value.endDate),
    // budget: budgetFormat(value.budget),
    budget: budgetFormat(value.budget),
    report: {
      ...value.report,
      convValue: MoneyFormat(value.report.convValue),
      cost: MoneyFormat(value.report.cost),
    },
  }
  const onModify = () => {
    console.log('modify')
  }
  console.log(ItemValue)

  // roas = 광고매출 / 광고비 * 100
  return (
    <div className={styles.adCardItem}>
      <div className={styles.title}>{value.title}</div>
      <div className={styles.contentsWrapper}>
        <ul>
          <li>
            상태
            {ItemValue.status === 'ended' ? <span>종료</span> : <span>진행중</span>}
          </li>
          <li>
            광고 생성일<span>{ItemValue.startDate}</span>
            {value.endDate ? <span>({ItemValue.endDate})</span> : null}
          </li>
          <li>
            일 희망 예산 <span>{ItemValue.budget}</span>
          </li>
          <li>
            광고 수익율 <span>{ItemValue.report.roas}%</span>
          </li>
          <li>
            매출<span>{ItemValue.report.convValue}만원</span>
          </li>
          <li>
            광고비용<span>{ItemValue.report.cost}만원</span>
          </li>
        </ul>
        <button className={styles.modifyBtn} type='button' onClick={onModify}>
          수정하기
        </button>
      </div>
    </div>
  )
}
export default AdCardItem
