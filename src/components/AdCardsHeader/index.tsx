import React from 'react'
import ReactDropdown, { ReactDropdownProps } from 'react-dropdown'
import styles from './adCardsHeader.module.scss'
import 'react-dropdown/style.css'
import DropDown from '../dropDown'

interface Option {
  value: string
  label: string
}
const AdCardsHeader = () => {
  // 전체, 진행, 중단됨
  const options = ['all', 'ended', 'active']
  const defaultOption = options[0]

  const onChangeOptions = (arg: any): void => {
    console.log(arg)
  }
  const onClickMageAd = () => {
    console.log('open modal')
  }
  return (
    <div className={styles.headerContainer}>
      <ReactDropdown options={options} onChange={onChangeOptions} value={defaultOption} />
      <button className={styles.makeAdBtn} type='button' onClick={onClickMageAd}>
        광고 만들기
      </button>
    </div>
  )
}
export default AdCardsHeader
