import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryTooltip, VictoryVoronoiContainer } from 'victory'
import { useAppSelector } from '../../../../hooks/useAppSelector'
import { getDropList } from '../../../../redux/slice'

import GetData from '../getData'
import GetDateIndex from '../getDateIndex'

const Chart = () => {
  const { all } = GetData()
  const value = useAppSelector(getDropList)
  const date = GetDateIndex()
  const selected1 = value.filter((item) => item.order === 1)
  const selected2 = value.filter((item) => item.order === 2)
  const maxima = all.map((dataset) => Math.max(...dataset.map((d) => d.y)))

  const index1 = selected1[0].id
  const index2 = selected2[0].id
  console.log(index1, index2, value, all, maxima)
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      width={700}
      height={240}
      domainPadding={{ x: 30 }}
      containerComponent={<VictoryVoronoiContainer />}
    >
      <VictoryAxis
        scale='time'
        standalone={false}
        style={{
          axis: { stroke: 'transparent' },
          ticks: { stroke: 'transparent' },
          grid: { stroke: 'transparent' },
          tickLabels: { fontSize: 12, padding: 5, fill: '#94A2AD' },
        }}
      />

      <VictoryAxis
        dependentAxis
        standalone={false}
        style={{
          axis: { stroke: 'transparent' },
          grid: { stroke: '#EDEFF1', strokeWidth: 2, strokeDasharray: 'none' },
          ticks: { stroke: '#EDEFF1', strokeWidth: 2, size: 2 },
          tickLabels: { fontSize: 12, padding: 5, fill: '#94A2AD' },
        }}
        tickValues={[0.16, 0.33, 0.5, 0.66, 0.83, 1]}
        tickFormat={(t) => Math.floor(t * maxima[3])}
      />
      <VictoryLine
        standalone={false}
        animate={{
          duration: 2000,
          onLoad: { duration: 500 },
        }}
        labelComponent={
          <VictoryTooltip
            flyoutWidth={150}
            flyoutPadding={{ top: 0, bottom: 0, left: 0, right: 0 }}
            flyoutStyle={{
              stroke: 'none',
              fill: '#4FADF7',
            }}
          />
        }
        style={{
          data: { stroke: '#4FADF7' },
          parent: { border: '1px solid #ccc' },
        }}
        y={(datum) => datum.y / maxima[3]}
        data={all[3].slice(date[0], date[0] + 7)}
      />
      <VictoryAxis
        dependentAxis
        orientation='right'
        standalone={false}
        style={{
          axis: { stroke: 'transparent' },
          grid: { stroke: '#EDEFF1', strokeWidth: 2, strokeDasharray: 'none' },
          ticks: { stroke: 'transparent', strokeWidth: 2, size: 2 },
          tickLabels: { fontSize: 12, fill: '#94A2AD' },
        }}
        tickValues={[0.16, 0.33, 0.5, 0.66, 0.83, 1]}
        tickFormat={(t) => Math.floor(t * maxima[2])}
      />
      <VictoryLine
        scale={{ x: 'time', y: 'linear' }}
        standalone={false}
        animate={{
          duration: 2000,
          onLoad: { duration: 500 },
        }}
        labelComponent={
          <VictoryTooltip
            flyoutWidth={150}
            flyoutPadding={{ top: 0, bottom: 0, left: 0, right: 0 }}
            flyoutStyle={{
              stroke: 'none',
              fill: '#85DA47',
            }}
          />
        }
        style={{
          data: { stroke: '#85DA47' },
          parent: { border: '1px solid #ccc' },
        }}
        y={(datum) => datum.y / maxima[2]}
        data={all[2].slice(date[0], date[0] + 7)}
      />
    </VictoryChart>
  )
}
export default Chart
