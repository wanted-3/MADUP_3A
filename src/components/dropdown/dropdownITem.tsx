import { useState } from 'react'
import { Arrow, CircleBlue, CircleGreen } from '../../assets/svgs'
import { cx } from '../../styles'
import { IDropDown } from '../../types/dropdown.d'
import styles from './dropdown.module.scss'

interface props {
  value: IDropDown[]
  func: (event: React.MouseEvent<HTMLButtonElement>) => void
  orders: number
}

const DropDownItem = ({ value, func, orders }: props) => {
  const [show, setShow] = useState(false)
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setShow((current: any) => !current)
  }
  const selected = value.filter((item) => item.order === orders)
  return (
    <div className={styles.dropdown}>
      <button
        type='button'
        onClick={onClick}
        className={cx(styles.dropDownBtn, { [styles.dropDownBtn2]: orders === 3 })}
      >
        {orders === 1 && <CircleBlue />}
        {orders === 2 && <CircleGreen />}
        {selected[0].title}
        <Arrow />
      </button>
      <ul id='dropdown' className={show ? cx(styles.select, { [styles.select2]: orders === 3 }) : styles.hidden}>
        {value.map(
          (item) =>
            item.order === 0 && (
              <li key={item.id}>
                <button type='button' onClick={func} value={item.id}>
                  {item.title}
                </button>
              </li>
            )
        )}
      </ul>
    </div>
  )
}
export default DropDownItem
