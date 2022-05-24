import { NavLink } from 'react-router-dom'
import { Board, Chart, Guide, LogoMad } from '../../assets/svgs'
import { cx } from '../../styles'
import DropDown from '../dropdown/Dropdown'
import styles from './navi.module.scss'

const Navi = () => {
  return (
    <div className={styles.nav}>
      <header className={styles.logo}>
        <LogoMad />
      </header>
      <hr />
      <div className={styles.dropDown}>
        <p className={styles.text}>서비스</p>
        <DropDown orders={3} />
      </div>

      <div className={styles.navBtns}>
        <p className={styles.text}>광고 센터</p>
        <NavLink className={({ isActive }) => cx(styles.navBtn, { [styles.isActive]: isActive })} to='/'>
          <Board />
          대시보드
        </NavLink>
        <NavLink className={({ isActive }) => cx(styles.navBtn, { [styles.isActive]: isActive })} to='secondPage'>
          <Chart />
          광고센터
        </NavLink>
      </div>
      <aside>
        <button type='button' className={styles.infoGuide}>
          <Guide />
          <div className={styles.infoGuideText}>
            <h1 className={styles.infoGuideTitle}>래버 이용 가이드</h1>
            <p className={styles.text}>시작하기 전에 알아보기</p>
          </div>
        </button>
        <p className={styles.text}>레버는 함께 만들어갑니다.</p>
        <a href='www.google.com' className={styles.link}>
          이용약관
        </a>
      </aside>
    </div>
  )
}
export default Navi
