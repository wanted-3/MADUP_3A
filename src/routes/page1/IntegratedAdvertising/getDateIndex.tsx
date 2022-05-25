import { useAppSelector } from '../../../hooks/useAppSelector'
import { getDate, getTrendads } from '../../../redux/slice'

const GetDateIndex = () => {
  const DATA = useAppSelector(getTrendads)
  const selectedDate = useAppSelector(getDate)
  const selectedDateIndex1 = DATA.findIndex((i) => i.date === selectedDate[0])
  const selectedDateIndex2 = DATA.findIndex((i) => i.date === selectedDate[1])
  return [selectedDateIndex1, selectedDateIndex2 + 1]
}
export default GetDateIndex
