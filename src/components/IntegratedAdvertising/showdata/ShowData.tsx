import getData from '../chart/getData'

const ShowData = () => {
  const date = [8, 15]
  const prevDate = date[1] - date[0]
  const { all } = getData()
  const ROAS = [
    all[0].slice(date[0], date[1]).reduce((prev, current) => {
      return prev + +current.y
    }, 0) / prevDate,
    all[0].slice(date[0] - prevDate, date[1] - prevDate).reduce((prev, current) => {
      return prev + +current.y
    }, 0) / prevDate,
  ]
  const diffROAS = ROAS[1] - ROAS[0]
  const cost = [
    all[1].slice(date[0], date[1]).reduce((prev, current) => {
      return prev + +current.y
    }, 0) / prevDate,
    all[1].slice(date[0] - prevDate, date[1] - prevDate).reduce((prev, current) => {
      return prev + +current.y
    }, 0) / prevDate,
  ]
  const differcost = cost[1] - cost[0]
  const imp = [
    all[2].slice(date[0], date[1]).reduce((prev, current) => {
      return prev + +current.y
    }, 0) / prevDate,
    all[2].slice(date[0] - prevDate, date[1] - prevDate).reduce((prev, current) => {
      return prev + +current.y
    }, 0) / prevDate,
  ]
  const differimp = imp[1] - imp[0]
  const click = [
    all[3].slice(date[0], date[1]).reduce((prev, current) => {
      return prev + +current.y
    }, 0) / prevDate,
    all[3].slice(date[0] - prevDate, date[1] - prevDate).reduce((prev, current) => {
      return prev + +current.y
    }, 0) / prevDate,
  ]
  const differclick = click[1] - click[0]
  const conversion = [
    all[4].slice(date[0], date[1]).reduce((prev, current) => {
      return prev + +current.y
    }, 0) / prevDate,
    all[4].slice(date[0] - prevDate, date[1] - prevDate).reduce((prev, current) => {
      return prev + +current.y
    }, 0) / prevDate,
  ]
  const differconversion = conversion[1] - conversion[0]
  const sales = [
    all[5].slice(date[0], date[1]).reduce((prev, current) => {
      return prev + +current.y
    }, 0),
    all[5].slice(date[0] - prevDate, date[1] - prevDate).reduce((prev, current) => {
      return prev + +current.y
    }, 0) / prevDate,
  ]
  const differsales = sales[1] - sales[0]

  return (
    <>
      <p>
        ROAS:
        {ROAS[0]}/{diffROAS}
      </p>
      <p>
        cost:
        {cost[0]}/{differcost}
      </p>
      <p>
        imp:{imp[0]}/{differimp}
      </p>
      <p>
        click:{click[0]}/{differclick}
      </p>
      <p>
        conversion:{conversion[0]}/{differconversion}
      </p>
      <p>
        sales:{sales[0]}/{differsales}
      </p>
    </>
  )
}
export default ShowData
