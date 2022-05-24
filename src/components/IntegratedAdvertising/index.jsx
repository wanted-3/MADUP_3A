import styles from './integrated.module.scss'
import DropDown from './dropdown/Dropdown'
import Chart from './chart/Chart'
import AdData from './totalAd/AdData'

const Integrated = () => {
  return (
    <div className={styles.integrated}>
      <div className={styles.qwe}>
        <AdData />
      </div>
      <div className={styles.charts}>
        <div className={styles.dropdowns}>
          <DropDown orders={1} />
          <DropDown orders={2} />
        </div>
        <Chart />
      </div>
    </div>
  )
}

export default Integrated
