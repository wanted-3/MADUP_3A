import Navi from '../components/navBar/Navi'
import Integrated from './IntegratedAdvertising'
import styles from './Routes.module.scss'
import Date from '../components/datepicker/Datepicker'
import AdCards from '../components/AdCards'

const FirstPage = () => {
  return (
    <div className={styles.firstpage}>
      {/* <header>
      </header>  */}
      <Date />
      <nav>
        <Navi />
      </nav>
      <main className={styles.main}>
        <div className={styles.integrated}>
          <h1>통합 광고 현황</h1>
          <Integrated />
          <AdCards />
        </div>
      </main>
    </div>
  )
}

export default FirstPage
