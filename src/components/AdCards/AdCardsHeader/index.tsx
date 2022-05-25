import styles from './adCardsHeader.module.scss'
import DropDown from '../../dropDown/Dropdown'

const AdCardsHeader = () => {
  const onClickMageAd = () => {}

  return (
    <div className={styles.headerContainer}>
      <DropDown orders={4} />
      <button className={styles.makeAdBtn} type='button' onClick={onClickMageAd}>
        광고 만들기
      </button>
    </div>
  )
}
export default AdCardsHeader
