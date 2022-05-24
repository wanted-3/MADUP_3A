import { useDispatch, useSelector } from 'react-redux'
import { getDropList, setDropDown } from '../../redux/slice'

import DropDownItem from './dropdownITem'
import Nav from './dropdownValues'

interface props {
  orders: number
}

const DropDown = ({ orders }: props) => {
  const dispatch = useDispatch()
  const value = useSelector(getDropList)

  const value2 = Nav

  const handleChart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const clicked = Number(event.currentTarget.value)
    const convert = value.map((item) => (item.id === Number(clicked) ? { ...item, order: orders } : item))
    const setToZero = convert.map((item) =>
      item.order === orders && item.id !== Number(clicked) ? { ...item, order: 0 } : item
    )
    dispatch(setDropDown(setToZero))
  }

  const handleDropDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  if (orders === 1 || orders === 2) {
    return <DropDownItem value={value} func={handleChart} orders={orders} />
  }
  return <DropDownItem value={value2[3]} func={handleDropDown} orders={orders} />
}
export default DropDown
