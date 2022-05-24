import Navi from '../components/navBar/Navi'
import Integrated from './IntegratedAdvertising'
import styles from './Routes.module.scss'
import Date from '../components/datepicker/Datepicker'

const FirstPage = () => {
  return (
    <div className={styles.firstpage}>
      {/* <header><DatePickerComponent/></header> */}
      <Date />
      <nav>
        <Navi />
      </nav>
      <main className={styles.main}>
        <Integrated />
      </main>
    </div>
  )
}

export default FirstPage
