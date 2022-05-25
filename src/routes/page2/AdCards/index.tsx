import { IForMatAdData } from '../../../types/adDate.d'
import GetAdData from '../../../util/getAdData'
import AdCardItem from './AdCardItem'
import styles from './adCards.module.scss'

import AdCardsHeader from './AdCardsHeader'

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
