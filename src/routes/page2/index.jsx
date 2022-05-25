import Navi from '../../components/navBar/Navi'
import styles from './page2.module.scss'
import AdCards from './AdCards'

const SecondPage = () => {
  return (
    <div className={styles.firstpage}>
      {/* <header>
      </header>  */}
      <nav>
        <Navi />
      </nav>
      <main className={styles.main}>
        <div className={styles.integrated}>
          <h1>광고관리</h1>
          <AdCards />
        </div>
      </main>
    </div>
  )
}

export default SecondPage
