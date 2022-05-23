import { Board, Chart, LogoMad } from '../../assets/svgs'
import styles from './navi.module.scss'

const Navi = () => {
  return (
    <div className={styles.nav}>
      <header>
        <LogoMad />
      </header>
      <hr />
      <main>
        <p>서비스</p>
        {/* <DropDown orders={1} /> */}
        <p>광고 센터</p>
        <button type='button'>
          <Board />
          대시보드
        </button>
        {/* NavLink */}
        <button type='button'>
          <Chart />
          광고센터
        </button>
        <ul>
          <li>래버 이용 가이드</li>
          <li>시작하기 전에 알아보기</li>
        </ul>
      </main>
      <footer>
        <p>레버는 함께 만들어갑니다.</p>
        {/* <a href='#'>이용약관</a> */}
      </footer>
    </div>
  )
}
export default Navi
