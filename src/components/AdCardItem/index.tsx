/* eslint-disable import/extensions */
import { IAd } from '../../types/adData'
import styles from './adCardItem.module.scss'

interface Props {
  item: IAd
}

const AdCardItem = ({ item }: Props): JSX.Element => {
  const { startDate, endDate, budget, report, title } = item

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

  // formatting 된 data
  const ItemValue = {
    ...item,
    startDate: DateFormat(startDate),
    endDate: DateFormat(endDate),
    // budget: budgetFormat(value.budget),
    budget: budgetFormat(budget),
    report: {
      ...report,
      convValue: MoneyFormat(report.convValue),
      cost: MoneyFormat(report.cost),
    },
  }
  const onModify = () => {
    console.log('modify')
  }
  // console.log(ItemValue)

  return (
    <div className={styles.adCardItem}>
      <h2>
        <span>{ItemValue.adType === 'web' ? '웹광고_' : '앱광고_'}</span>
        {title}
      </h2>
      <div className={styles.contentsWrapper}>
        <dl>
          <div className={styles.dtddWrapper}>
            <dt>상태</dt>
            {ItemValue.status === 'ended' ? <dd>종료</dd> : <dd>진행중</dd>}
          </div>
          <div className={styles.dtddWrapper}>
            <dt>광고 생성일</dt>
            {endDate ? (
              <dd>
                {ItemValue.startDate}({ItemValue.endDate})
              </dd>
            ) : (
              <dd>{ItemValue.startDate}</dd>
            )}
          </div>
          <div className={styles.dtddWrapper}>
            <dt>일 희망 예산</dt>
            <dd>{ItemValue.budget}</dd>
          </div>
          <div className={styles.dtddWrapper}>
            <dt>광고 수익율</dt>
            <dd>{ItemValue.report.roas}%</dd>
          </div>
          <div className={styles.dtddWrapper}>
            <dt>매출</dt>
            <dd>{ItemValue.report.convValue}만원</dd>
          </div>
          <div className={styles.dtddWrapper}>
            <dt>광고비용</dt>
            <dd>{ItemValue.report.cost}만원</dd>
          </div>
        </dl>
        <button className={styles.modifyBtn} type='button' onClick={onModify}>
          수정하기
        </button>
      </div>
    </div>
  )
}
export default AdCardItem
