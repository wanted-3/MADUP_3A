/* eslint-disable import/extensions */
import AdCardItem from '../AdCardItem'
import styles from './adCards.module.scss'

import { useAppSelector } from '../../hooks/useAppSelector'

import { IAd } from '../../types/adData'
import { useState } from 'react'
import DropDown from '../dropdown/Dropdown'

const AdCards = () => {
  const adsData: IAd[] = useAppSelector((state) => state.ads)
  const [status, setStatus] = useState('all')

  // const filteredAdCardData = () => {
  //   if (status === 'all') {
  //     return adsData
  //   }
  //   return adsData.filter((value) => value.status === status)
  // }
  return (
    <div className={styles.contentWrapper}>
      {/* <AdCardsHeader setStatus={setStatus} /> */}
      <DropDown orders={4} />
      <div className={styles.adCardsWrapper}>
        {/* {filteredAdCardData().map((item: IAd) => {
          return <AdCardItem key={item.id} item={item} />
        })} */}
      </div>
    </div>
  )
}
export default AdCards
