import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useState } from 'react'
import styles from './datepicker.module.scss'
import dayjs from 'dayjs'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { setDate } from '../../redux/slice'

const Datepicker = () => {
  const dispatch = useAppDispatch()
  const [startDate, setStartDate] = useState(new Date(2022, 1))
  const [endDate, setendDate] = useState(new Date(2022, 2, 7))

  useEffect(() => {
    const dateForm = [dayjs(startDate).format('YYYY-MM-DD'), dayjs(endDate).format('YYYY-MM-DD')]
    dispatch(setDate(dateForm))
  }, [dispatch, endDate, startDate])

  return (
    <div className={styles.wrap}>
      <DatePicker
        className={styles.startDateInput}
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        dateFormat='yyyy년MM월dd일'
        minDate={new Date(2022, 1)}
        maxDate={new Date(2022, 4, 0)}
      />
      <span>~</span>
      <DatePicker
        className={styles.endDateInput}
        selected={endDate}
        onChange={(date: Date) => setendDate(date)}
        dateFormat='yyyy년MM월dd일'
        minDate={new Date(2022, 1)}
        maxDate={new Date(2022, 4, 0)}
      />
    </div>
  )
}

export default Datepicker
