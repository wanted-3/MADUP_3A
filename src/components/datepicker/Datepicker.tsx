import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useState } from 'react'
import styles from './datepicker.module.scss'
import dayjs from 'dayjs'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { setDate } from '../../redux/slice'
import { Arrow } from '../../assets/svgs'

const Datepicker = () => {
  const dispatch = useAppDispatch()
  const [startDate, setStartDate] = useState(new Date(2022, 1))
  const [endDate, setEndDate] = useState(new Date(2022, 1, 7))
  useEffect(() => {
    const dateForm = [dayjs(startDate).format('YYYY-MM-DD'), dayjs(endDate).format('YYYY-MM-DD')]
    dispatch(setDate(dateForm))
  }, [dispatch, endDate, startDate])

  const handleChange = (date: [Date, Date]) => {
    const [start, end] = date
    setStartDate(start)
    const tmp = dayjs(start).add(6, 'day').toDate()
    if (tmp < end) {
      setEndDate(tmp)
    } else {
      setEndDate(end)
    }
  }
  return (
    <div className={styles.wrap}>
      <DatePicker
        className={styles.dateInput}
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        dateFormat='yyyy년MM월dd일'
        minDate={new Date(2022, 1)}
        maxDate={new Date(2022, 4, 0)}
        selectsRange
      />
      <Arrow />
    </div>
  )
}

export default Datepicker
