import React from 'react'
import ReactDropdown from 'react-dropdown'
import styles from './adCardsHeader.module.scss'
import 'react-dropdown/style.css'
import DropDown from '../dropdown/Dropdown'

interface Props {
  setStatus: React.Dispatch<React.SetStateAction<string>>
}

const adsDropDownMenu = [
  { id: 1, title: '전체', order: 0, value: 'all' },
  { id: 2, title: '진행중', order: 0, value: 'active' },
  { id: 3, title: '중단됨', order: 0, value: 'ended' },
]
const AdCardsHeader = ({ setStatus }: Props) => {
  // 전체, 진행, 중단됨
  const options = ['all', 'active', 'ended']
  const defaultOption = options[0]

  const onChangeOptions = (arg: any): void => {
    setStatus(arg.value)
  }
  const onClickMageAd = () => {
    console.log('open modal')
  }
  return (
    <div className={styles.headerContainer}>
      <ReactDropdown options={options} onChange={onChangeOptions} value={defaultOption} />
      <DropDown orders={4} menu={adsDropDownMenu} />
      <button className={styles.makeAdBtn} type='button' onClick={onClickMageAd}>
        광고 만들기
      </button>
    </div>
  )
}
export default AdCardsHeader
