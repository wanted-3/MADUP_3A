import styles from './integrated.module.scss'
import ShowData from './showdata/ShowData'
import DropDown from './dropdown/Dropdown'
import Chart from './chart/Chart'

const Integrated = () => {
  return (
    <div className={styles.integrated}>
      <ShowData />
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
