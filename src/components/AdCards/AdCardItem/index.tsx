/* eslint-disable import/extensions */
import { IForMatAdData } from '../../../types/adData'
import styles from './adCardItem.module.scss'

interface Props {
  item: IForMatAdData
}

const AdCardItem = ({ item }: Props): JSX.Element => {
  const onModify = () => {}
  return (
    <div className={styles.adCardItem}>
      <h2>
        <span>{item.adType === 'web' ? '웹광고_' : '앱광고_'}</span>
        {item.title}
      </h2>
      <div className={styles.contentsWrapper}>
        <dl>
          <div className={styles.dtddWrapper}>
            <dt>상태</dt>
            {item.status === 'ended' ? <dd>종료</dd> : <dd>진행중</dd>}
          </div>
          <div className={styles.dtddWrapper}>
            <dt>광고 생성일</dt>
            {item.endDate ? (
              <dd>
                {item.startDate}({item.endDate})
              </dd>
            ) : (
              <dd>{item.startDate}</dd>
            )}
          </div>
          <div className={styles.dtddWrapper}>
            <dt>일 희망 예산</dt>
            <dd>{item.budget}</dd>
          </div>
          <div className={styles.dtddWrapper}>
            <dt>광고 수익율</dt>
            <dd>{item.report.roas}%</dd>
          </div>
          <div className={styles.dtddWrapper}>
            <dt>매출</dt>
            <dd>{item.report.convValue}만원</dd>
          </div>
          <div className={styles.dtddWrapper}>
            <dt>광고비용</dt>
            <dd>{item.report.cost}만원</dd>
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
