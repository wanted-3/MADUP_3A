import AdCardItem from '../AdCardItem'
import styles from './adCards.module.scss'

import { useAppSelector } from '../../hooks/useAppSelector'
import AdCardsHeader from '../AdCardsHeader'

const AdCards = () => {
  const adsData = useAppSelector((state) => state.ads)

  // console.log(adsData)

  return (
    <div className={styles.contentWrapper}>
      <AdCardsHeader />
      <div className={styles.adCardsWrapper}>
        {adsData.map((value) => {
          return <AdCardItem key={value.id} value={value} />
        })}
      </div>
    </div>
  )
}
export default AdCards
