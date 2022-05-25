import Navi from '../../components/navBar/Navi'
import Integrated from './IntegratedAdvertising'
import styles from './page1.module.scss'
import Header from '../../components/header/Header'
import MediaStatus from './MediaChart/MediaStatus'

const FirstPage = () => {
  return (
    <div className={styles.firstpage}>
      <nav>
        <Navi className={styles.nav} />
      </nav>
      <div className={styles.rightSide}>
        <Header className={styles.header} />
        <main className={styles.main}>
          <div>
            <h1 className={styles.title}>대시보드</h1>
            <h2 className={styles.subTitle}>통합 광고 현황</h2>
            <Integrated className={styles.integrated} />
            <MediaStatus />
          </div>
        </main>
      </div>
    </div>
  )
}

export default FirstPage
