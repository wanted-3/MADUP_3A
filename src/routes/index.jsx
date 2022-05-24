import Integrated from '../components/IntegratedAdvertising'
import Navi from '../components/navBar/Navi'
import styles from './Routes.module.scss'

const FirstPage = () => {
  return (
    <div className={styles.firstpage}>
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
