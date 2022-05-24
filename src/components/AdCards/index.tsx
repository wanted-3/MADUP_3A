import AdCardItem from '../AdCardItem'
import styles from './adCards.module.scss'

import { useAppSelector } from '../../hooks/useAppSelector'
import AdCardsHeader from '../AdCardsHeader'
import { IAd } from 'types/adData'

const AdCards = () => {
  const adsData: IAd[] = useAppSelector((state) => state.ads)

  console.log(adsData)

  return (
    <div className={styles.contentWrapper}>
      <AdCardsHeader />
      <div className={styles.adCardsWrapper}>
        {adsData.map((item: IAd) => {
          return <AdCardItem key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}
export default AdCards
