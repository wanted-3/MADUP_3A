import styles from './integrated.module.scss'
import Chart from './chart/Chart'
import AdData from './totalAd/AdData'
import DropDown from '../../../components/dropdown/Dropdown'

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
