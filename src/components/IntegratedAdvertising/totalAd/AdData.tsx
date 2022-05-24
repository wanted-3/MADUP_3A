import styles from './adData.module.scss'

import getData from '../chart/getData'
import { DecrementIcon, IncrementIcon } from '../../../assets/svgs'

const AdData = () => {
  const date = [8, 15]
  const prevDate = date[1] - date[0]
  const { all } = getData()

  const ROAS = [
    all[0].slice(date[0], date[1]).reduce((prev, current) => {
      return prev + +current.y
    }, 0),
    all[0].slice(date[0] - prevDate, date[1] - prevDate).reduce((prev, current) => {
      return prev + +current.y
    }, 0),
  ]
  const differROAS = ROAS[1] - ROAS[0]

  const cost = [
    all[1].slice(date[0], date[1]).reduce((prev, current) => {
      return prev + +current.y
    }, 0),
    all[1].slice(date[0] - prevDate, date[1] - prevDate).reduce((prev, current) => {
      return prev + +current.y
    }, 0),
  ]
  const differcost = cost[1] - cost[0]

  const imp = [
    all[2].slice(date[0], date[1]).reduce((prev, current) => {
      return prev + +current.y
    }, 0),
    all[2].slice(date[0] - prevDate, date[1] - prevDate).reduce((prev, current) => {
      return prev + +current.y
    }, 0),
  ]
  const differimp = imp[1] - imp[0]

  const click = [
    all[3].slice(date[0], date[1]).reduce((prev, current) => {
      return prev + +current.y
    }, 0),
    all[3].slice(date[0] - prevDate, date[1] - prevDate).reduce((prev, current) => {
      return prev + +current.y
    }, 0),
  ]
  const differclick = click[1] - click[0]

  const conversion = [
    all[4].slice(date[0], date[1]).reduce((prev, current) => {
      return prev + +current.y
    }, 0),
    all[4].slice(date[0] - prevDate, date[1] - prevDate).reduce((prev, current) => {
      return prev + +current.y
    }, 0),
  ]
  const differconversion = conversion[1] - conversion[0]

  const sales = [
    all[5].slice(date[0], date[1]).reduce((prev, current) => {
      return prev + +current.y
    }, 0),
    all[5].slice(date[0] - prevDate, date[1] - prevDate).reduce((prev, current) => {
      return prev + +current.y
    }, 0),
  ]
  const differsales = sales[1] - sales[0]

  const setPositiveInteger = (aaa: number) => (aaa < 0 ? Math.floor(aaa * -1) : Math.floor(aaa))

  const setString = (ccc: number) => {
    if (ccc < 0) {
      return String(ccc * -1)
    }
    return String(ccc)
  }
  const setSlice = (_value: string) => {
    if (_value.length > 7) {
      return _value.slice(0, 4).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
    }
    if (_value.length > 6) {
      return _value.slice(0, 3)
    }
    if (_value.length === 6) {
      return _value.slice(0, 2)
    }
    if (_value.length === 5) {
      return _value.slice(0, 1)
    }
    if (_value.length < 5) {
      return _value
    }
    return null
  }

  const setIconColor = (a: number) => (a < 0 ? <IncrementIcon /> : <DecrementIcon />)

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
