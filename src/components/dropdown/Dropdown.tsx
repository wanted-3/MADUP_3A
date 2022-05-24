import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Arrow, CircleBlue, CircleGreen } from '../../assets/svgs'
import { getDropList, setDropDown } from '../../redux/slice'
import styles from './dropdown.module.scss'

interface props {
  orders: number
}

const DropDown = ({ orders }: props) => {
  const dispatch = useDispatch()
  const value = useSelector(getDropList)

  const [show, setShow] = useState(false)
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
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
  return (
    <div className={styles.dropdown}>
      <button type='button' onClick={onClick} className={styles.dropDownBtn}>
        {/* {selected[0].title} 필요한 값으로 리스트르 만들어서 변경해 주세요! */}
        <Arrow />
      </button>
      {/* <ul id='dropdown' className={show ? styles.select : styles.hidden}>
        필요한 값을 리스트로 만들어서 사용해 주세요!
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
      </ul> */}
    </div>
  )
}
export default DropDown
