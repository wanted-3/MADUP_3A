import styles from './adData.module.scss'
import setData from '../dataConverts/setData'
import setString from '../dataConverts/setString'
import setPositiveInteger from '../dataConverts/setPositiveInteger'
import setSlice from '../dataConverts/setSlice'
import setIconColor from '../dataConverts/setIconColor'

const AdData = () => {
  const {
    ROAS,
    differROAS,
    cost,
    differcost,
    imp,
    differimp,
    click,
    differclick,
    conversion,
    differconversion,
    sales,
    differsales,
  } = setData()

  const adList = [
    {
      title: 'ROAS',
      value: `${setPositiveInteger(ROAS[0])}%`,
      upDownIcon: setIconColor(differROAS),
      upDownValue: `${setPositiveInteger(differROAS)}%`,
    },
    {
      title: '광고비',
      value: `${setSlice(setString(cost[0]))}만 원`,
      upDownIcon: setIconColor(differcost),
      upDownValue: `${setSlice(setString(differcost))}만 원`,
    },
    {
      title: '노출 수',
      value: `${setSlice(setString(imp[0]))}만 회`,
      upDownIcon: setIconColor(differimp),
      upDownValue: `${setSlice(setString(differimp))}만 회`,
    },
    {
      title: '클릭 수',
      value: `${click[0]}회`,
      upDownIcon: setIconColor(differclick),
      upDownValue: `${setSlice(setString(differclick))}회`,
    },
    {
      title: '전환 수',
      value: `${setSlice(setString(conversion[0]))}회`,
      upDownIcon: setIconColor(differconversion),
      upDownValue: `${setSlice(setString(differconversion))}회`,
    },
    {
      title: '매출',
      value: `${setSlice(setString(sales[0]))}만 원`,
      upDownIcon: setIconColor(differsales),
      upDownValue: `${setSlice(setString(differsales))}만 원`,
    },
  ]

  return (
    <>
      {adList.map((a, b) => {
        const key = `totalAd-${b}}`
        return (
          <div key={key} className={styles.wrap}>
            <h4>{a.title}</h4>
            <div className={styles.dataResult}>
              <p>{a.value}</p>
              <div className={styles.increase}>
                {a.upDownIcon}
                <p>{a.upDownValue}</p>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default AdData
