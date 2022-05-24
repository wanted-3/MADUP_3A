import React from 'react'
import ReactDropdown from 'react-dropdown'
import styles from './adCardsHeader.module.scss'
import 'react-dropdown/style.css'

interface Props {
  setStatus: React.Dispatch<React.SetStateAction<string>>
}
interface Option {
  value: string
  label: string
}
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
      <button className={styles.makeAdBtn} type='button' onClick={onClickMageAd}>
        광고 만들기
      </button>
    </div>
  )
}
export default AdCardsHeader
