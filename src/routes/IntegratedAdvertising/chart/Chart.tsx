import { VictoryChart, VictoryLine, VictoryTheme, VictoryAxis, VictoryTooltip, VictoryVoronoiContainer } from 'victory'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getDropList } from '../../../redux/slice'
import GetData from '../getData'
import GetDateIndex from '../getDateIndex'

const Chart = () => {
  const { all } = GetData()
  const value = useAppSelector(getDropList)
  const date = GetDateIndex()
  const selected = value.filter((item) => item.order !== 0)
  const maxima = all.map((dataset) => Math.max(...dataset.map((d) => d.y)))
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
        tickFormat={(t) => Math.floor(t * maxima[selected[0].id])}
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
            flyoutPadding={{ top: 0, bottom: 0, left: 10, right: 10 }}
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
        y={(datum) => datum.y / maxima[selected[0].id]}
        data={all[selected[0].id].slice(date[0], date[1])}
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
        tickFormat={(t) => Math.floor(t * maxima[selected[1].id])}
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
            flyoutPadding={{ top: 0, bottom: 0, left: 10, right: 10 }}
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
        y={(datum) => datum.y / maxima[selected[1].id]}
        data={all[selected[1].id].slice(date[0], date[1])}
      />
    </VictoryChart>
  )
}
export default Chart
