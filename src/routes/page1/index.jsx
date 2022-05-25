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
          <div className={styles.integrated}>
            <p className={styles.pageTitle}>대시보드</p>
            <div className={styles.contentsWrapper}>
              <h2 className={styles.subTitle}>통합 광고 현황</h2>
              <Integrated />
            </div>
            <div className={styles.contentsWrapper}>
              <h2 className={styles.subTitle}>매체 현황</h2>
              <MediaStatus />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default FirstPage
