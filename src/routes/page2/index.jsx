import Navi from '../../components/navBar/Navi'
import styles from './page2.module.scss'
import AdCards from './AdCards'
import Header from '../../components/header/Header'

const SecondPage = () => {
  return (
    <div className={styles.secondpage}>
      <nav>
        <Navi />
      </nav>
      <div className={styles.rightSide}>
        <Header />
        <main className={styles.main}>
          <div className={styles.integrated}>
            <p className={styles.pageTitle}>광고관리</p>
            <AdCards />
          </div>
        </main>
      </div>
    </div>
  )
}

export default SecondPage
