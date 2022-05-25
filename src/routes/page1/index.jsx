import Navi from '../../components/navBar/Navi'
import Integrated from './IntegratedAdvertising'
import styles from './page1.module.scss'
import Date from '../../components/datepicker/Datepicker'
import AdCards from '../../components/AdCards'

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
          <h1>대시보드</h1>
          <h2>통합 광고 현황</h2>
          <Integrated />
          <AdCards />
        </div>
      </main>
    </div>
  )
}

export default FirstPage
