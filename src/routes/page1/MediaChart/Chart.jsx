import { useSelector } from 'react-redux'
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryTooltip,
  VictoryLegend,
} from 'victory'

const Chart = () => {
  const result = useSelector((state) => state.mediaChart)

  const totals =
    result.length &&
    result[0].map((_, i) => {
      return result.reduce((memo, curr) => {
        return memo + curr[i].y
      }, 0)
    })

  const mental =
    result.length &&
    result.map((data) => {
      return data.map((datum, i) => {
        return { x: datum.x, y: (datum.y / totals[i]) * 100, k: Math.round(datum.y) }
      })
    })

  return (
    <div style={{ marginBottom: '50px' }}>
      <VictoryChart width='800' height='235' domainPadding={{ x: 50, y: 10 }} theme={VictoryTheme.material}>
        <VictoryAxis
          style={{ axis: { stroke: '#efefef' }, ticks: { stroke: 'transparent', strokeWidth: 2, size: 2 } }}
          tickFormat={['광고비', '매출', '노출수', '클릭수', '전환수']}
        />
        <VictoryAxis
          style={{ axis: { stroke: 'transparent' }, ticks: { stroke: 'transparent', strokeWidth: 2, size: 2 } }}
          dependentAxis
          tickFormat={(tick) => `${tick}%`}
        />

        <VictoryStack colorScale='cool'>
          {mental.length &&
            mental.map((data, i) => (
              <VictoryBar
                barRatio={0.25}
                data={data}
                cornerRadius={{
                  topLeft: i === 3 ? 5 : 0,
                  topRight: i === 3 ? 5 : 0,
                }}
                style={{
                  labels: { fill: 'white' },
                }}
                key={data[0].y}
                labels={({ datum }) => `${datum.k}`}
                labelComponent={
                  <VictoryTooltip
                    constrainToVisibleArea
                    flyoutStyle={{
                      stroke: 'none',
                      fill: '#2d3436',
                    }}
                  />
                }
              />
            ))}
        </VictoryStack>
      </VictoryChart>
      <VictoryLegend
        x={420}
        width={800}
        height={25}
        orientation='horizontal'
        gutter={20}
        colorScale='cool'
        data={[{ name: 'Facebook' }, { name: 'Google' }, { name: 'Naver' }, { name: 'Kakao' }]}
      />
    </div>
  )
}

export default Chart
