import { useDispatch, useSelector } from 'react-redux'
import { getAdsDrop, getDropList, setAdsDropDown, setDropDown } from '../../redux/slice'
import DropDownItem from './DropdownItem'

interface props {
  orders: number
}

const Nav = {
  3: [
    {
      id: 0,
      title: '매드업',
      order: 3,
    },
    {
      id: 1,
      title: '서비스 추가하기',
      order: 0,
    },
  ],
}

const DropDown = ({ orders }: props) => {
  const dispatch = useDispatch()
  const value = useSelector(getDropList)
  const adsValue = useSelector(getAdsDrop)
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
  const handleAdsDrop = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const clicked = event.currentTarget.value
    const convert = adsValue.map((item) => (item.title === clicked ? { ...item, order: orders } : item))
    const setToZero = convert.map((item) =>
      item.order === orders && item.title !== clicked ? { ...item, order: 0 } : item
    )
    dispatch(setAdsDropDown(setToZero))
  }
  const handleDropDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  if (orders === 1 || orders === 2) {
    return <DropDownItem value={value} func={handleChart} orders={orders} />
  }
  if (orders === 4) {
    return <DropDownItem value={adsValue} func={handleAdsDrop} orders={orders} />
  }
  return <DropDownItem value={value2[3]} func={handleDropDown} orders={orders} />
}
export default DropDown
