import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useState } from 'react'
import styles from './datepicker.module.scss'

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date(2022, 1))
  const [endDate, setendDate] = useState(new Date(2022, 4, 0))
  const [startDateFormat, setStartDateFormat] = useState('')
  const [endDateFormat, setendDateFormat] = useState('')
  const dateToString = (date: Date) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
      .getDate()
      .toString()
      .padStart(2, '0')}`
  }
  useEffect(() => {
    setStartDateFormat(dateToString(startDate))
    setendDateFormat(dateToString(endDate))
    console.log(startDateFormat, endDateFormat)
  }, [startDate, endDate])
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
