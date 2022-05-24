/* eslint-disable import/extensions */
import AdCardItem from '../AdCardItem'
import styles from './adCards.module.scss'

import { useAppSelector } from '../../hooks/useAppSelector'

import { IAd } from '../../types/adData'
import { useMemo, useState } from 'react'
import AdCardsHeader from '../AdCardsHeader'

const AdCards = () => {
  const adsData: IAd[] = useAppSelector((state) => state.ads)
  const [status, setStatus] = useState('all')
  console.log(adsData)
  // card데이터
  const filteredAdCardData = () => {
    if (status === 'all') {
      return adsData
    }
    return adsData.filter((value) => value.status === status)
  }
  console.log(status)
  console.log(filteredAdCardData())
  return (
    <div className={styles.contentWrapper}>
      <AdCardsHeader setStatus={setStatus} />
      <div className={styles.adCardsWrapper}>
        {filteredAdCardData().map((item: IAd) => {
          return <AdCardItem key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}
export default AdCards
