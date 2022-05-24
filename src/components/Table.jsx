import { useSelector } from 'react-redux'

import styles from './Table.module.scss'

const Table = () => {
  const { statistics, totals } = useSelector((state) => state.mediaTable)

  const th = ['', '광고비', '매출', 'ROAS', '노출수', '클릭수', '클릭률(CTR)', '클릭당비용(CPC)'].map((category) => (
    <th key={category}>{category}</th>
  ))

  const resultTable = statistics.map((company) => (
    <tr key={company}>
      {company.map((category) => (
        <td key={category}>{category}</td>
      ))}
    </tr>
  ))

  const totalsTable = totals.map((total, i) => <td key={`${i}-${total}`}>{total}</td>)

  return (
    <table className={styles.table}>
      <thead>
        <tr>{th}</tr>
      </thead>
      <tbody>{resultTable}</tbody>
      <tfoot>
        <tr>{totalsTable}</tr>
      </tfoot>
    </table>
  )
}

export default Table
