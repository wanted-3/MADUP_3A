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
    <div>
      <VictoryChart domainPadding={{ x: 50, y: 10 }} theme={VictoryTheme.material}>
        <VictoryAxis tickFormat={['광고비', '매출', '노출수', '클릭수', '전환수']} />
        <VictoryAxis dependentAxis tickFormat={(tick) => `${tick}%`} />

        <VictoryStack colorScale='cool'>
          {mental.length &&
            mental.map((data, i) => {
              return (
                <VictoryBar
                  data={data}
                  key={i}
                  labels={({ datum }) => `${datum.k}`}
                  labelComponent={<VictoryTooltip constrainToVisibleArea />}
                />
              )
            })}
        </VictoryStack>
      </VictoryChart>
      <VictoryLegend
        orientation='horizontal'
        gutter={20}
        colorScale='cool'
        data={[{ name: 'facebook' }, { name: 'google' }, { name: 'naver' }, { name: 'kakao' }]}
      />
    </div>
  )
}

export default Chart
