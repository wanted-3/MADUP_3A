import { useSelector } from 'react-redux'
import styles from './mediaTable.module.scss'
import { cx } from '../../../styles/index'

const Table = () => {
  const { statistics, totals } = useSelector((state) => state.mediaTable)

  const th = ['', '광고비', '매출', 'ROAS', '노출수', '클릭수', '클릭률(CTR)', '클릭당비용(CPC)'].map((category) => (
    <th key={category}>{category}</th>
  ))

  const statisticsTable = statistics.map((company) => (
    <tr key={company}>
      {company.map((category, i) => (
        <td key={`${company}-${category}-${i}`} className={cx({ [styles.leftTd]: i === 0 })}>
          {category}
        </td>
      ))}
    </tr>
  ))

  const totalsTable = totals.map((total, i) => (
    <td key={`${i}-${total}`} className={cx({ [styles.leftTd]: i === 0 })}>
      {total}
    </td>
  ))

  return (
    <table className={styles.table}>
      <thead>
        <tr>{th}</tr>
      </thead>
      <tbody>{statisticsTable}</tbody>
      <tfoot>
        <tr>{totalsTable}</tr>
      </tfoot>
    </table>
  )
}

export default Table
