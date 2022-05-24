// import { getDropList, setDropList } from 'hooks/redux/dropDown'
// import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Arrow, CircleBlue, CircleGreen } from '../../../assets/svgs'
import styles from './dropdown.module.scss'

interface props {
  orders: number
}

const DropDown = ({ orders }: props) => {
  // const dispatch = useDispatch()
  // const value = useSelector(getDropList)
  // const [show, setShow] = useState(false)

  // const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault()
  //   setShow((current: any) => !current)
  // }

  // const handleChart = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault()
  //   const clicked = event.currentTarget.value
  //   const convert = value.map((item) => (item.id === Number(clicked) ? { ...item, order: orders } : item))
  //   const setToZero = value.map((item) =>
  //     item.order === orders && item.id !== Number(clicked) ? { ...item, order: 0 } : item
  //   )
  //   const convertOrder = {
  //     convert,
  //     setToZero,
  //   }
  //   dispatch(setDropList(convertOrder))
  // dispatch(setDropList2(setToZero))
  // }
  // const memoizedCallback = useCallback(() => {
  //   const setToZero = value.map((item) =>
  //     item.order === orders && item.id !== Number(clicked) ? { ...item, order: 0 } : item
  //   )
  //   dispatch(setDropList(setToZero))
  // }, [dispatch, orders, value])

  // const selected = value.filter((item) => item.order === orders)

  return (
    <div className={styles.dropdown}>
      <button type='button' className={styles.dropDownBtn}>
        {orders === 1 ? <CircleBlue /> : <CircleGreen />}
        redux
        {/* {selected[0].title} */}
        <Arrow />
      </button>
      {/* <ul id='dropdown' className={show ? styles.select : styles.hidden}>
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
