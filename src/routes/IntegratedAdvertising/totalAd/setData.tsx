import GetData from '../getData'

const setData = () => {
  const date = [8, 15]
  const prevDate = date[1] - date[0]
  const { all } = GetData()

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

  return {
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
  }
}
export default setData
