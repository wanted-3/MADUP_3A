/* eslint-disable import/extensions */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Arrow, CircleBlue, CircleGreen } from '../../assets/svgs'
import { getDropList, setDropDown } from '../../redux/slice'
import { IDropDown } from '../../types/dropdown'
import styles from './dropdown.module.scss'

interface props {
  orders: number
  menu: IDropDown[]
}

// 광고 관리 드롭다운 데이터

const DropDown = ({ orders, menu }: props) => {
  const dispatch = useDispatch()
  const value = useSelector(getDropList)

  const [show, setShow] = useState(false)
  // 현재 드롭다운 아이템 상태 추가
  const [currentValue, setCurrentValue] = useState(menu[0].title)
  const [dropDownMenu, setDropDownMenu] = useState(menu)

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (show) {
      setCurrentValue(event.currentTarget.value)
    }
    console.log(event.currentTarget.value)
    setShow((current: any) => !current)
  }

  const handleChart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const clicked = Number(event.currentTarget.value)
    const convert = value.map((item) => (item.id === Number(clicked) ? { ...item, order: orders } : item))
    const setToZero = convert.map((item) =>
      item.order === orders && item.id !== Number(clicked) ? { ...item, order: 0 } : item
    )
    dispatch(setDropDown(setToZero))
  }
  const selected = value.filter((item) => item.order === orders)
  if (orders === 1 || orders === 2) {
    return (
      <div className={styles.dropdown}>
        <button type='button' onClick={onClick} className={styles.dropDownBtn}>
          {orders === 1 ? <CircleBlue /> : <CircleGreen />}
          {selected[0].title}
          <Arrow />
        </button>
        <ul id='dropdown' className={show ? styles.select : styles.hidden}>
          {value.map(
            (item) =>
              item.order === 0 && (
                <li key={item.id}>
                  <button type='button' onClick={handleChart} value={item.id}>
                    {item.title}
                  </button>
                </li>
              )
          )}
        </ul>
      </div>
    )
  }
  console.log(dropDownMenu)
  return (
    <div className={styles.dropdown}>
      <button type='button' onClick={onClick} className={styles.dropDownBtn} value={currentValue}>
        {currentValue}
        <Arrow />
      </button>
      <div className={styles.slectWrapper}>
        <ul id='dropdown' className={show ? styles.select : styles.hidden}>
          {dropDownMenu.map((item) => (
            <li key={item.id}>
              <button type='button' onClick={onClick} value={item.title}>
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default DropDown
