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
        <p>서비스</p>
        <DropDown orders={5} />
      </div>
      <div className={styles.navBtns}>
        <p>광고 센터</p>
        <NavLink className={({ isActive }) => cx(styles.navBtn, { [styles.clicked]: isActive })} to='/'>
          <Board />
          대시보드
        </NavLink>
        <NavLink className={({ isActive }) => cx(styles.navBtn, { [styles.clicked]: isActive })} to='/'>
          <Chart />
          광고센터
        </NavLink>
      </div>
      <aside>
        <button type='button' className={styles.infoGuide}>
          <Guide />
          <div className={styles.infoGuideText}>
            <h1>래버 이용 가이드</h1>
            <p>시작하기 전에 알아보기</p>
          </div>
        </button>
        <p>레버는 함께 만들어갑니다.</p>
        <a href='#'>이용약관</a>
      </aside>
    </div>
  )
}
export default Navi
