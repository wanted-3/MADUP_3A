import { Bell, Profile, Setting } from '../../assets/svgs'
import styles from './header.module.scss'
import Date from '../datepicker/Datepicker'

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.icons}>
        <li className={styles.bell}>
          <Bell />
        </li>
        <li>
          <Setting />
        </li>
        <li>
          <Profile />
        </li>
        <li>
          <p className={styles.name}>원티드님</p>
        </li>
      </ul>
      <Date />
    </div>
  )
}
export default Header
