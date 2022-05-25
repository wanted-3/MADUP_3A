/* eslint-disable import/extensions */
import AdCardItem from './AdCardItem'
import styles from './adCards.module.scss'

import { IForMatAdData } from '../../types/adData'

import AdCardsHeader from './AdCardsHeader'
import GetAdData from '../../util/getAdData'

const AdCards = () => {
  const { filteredAdCardData } = GetAdData()

  return (
    <div className={styles.contentWrapper}>
      <AdCardsHeader />
      <div className={styles.adCardsWrapper}>
        {filteredAdCardData.map((item: IForMatAdData) => {
          return <AdCardItem key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}
export default AdCards
