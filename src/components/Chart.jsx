import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack,
  VictoryTooltip,
  VictoryLegend,
} from 'victory'

const google = {
  channel: 'google',
  광고비: 12345678,
  매출: 12345678,
  노출수: 12345678,
  클릭수: 12345678,
  전환수: 12345678,
}

const naver = {
  channel: 'naver',
  광고비: 2345678,
  매출: 2345678,
  노출수: 2345678,
  클릭수: 2345678,
  전환수: 2345678,
}

const facebook = {
  channel: 'facebook',
  광고비: 345678,
  매출: 345678,
  노출수: 345678,
  클릭수: 345678,
  전환수: 345678,
}

const google2 = [
  { x: '광고비', y: 12345678 },
  { x: '매출', y: 12345678 },
  { x: '노출수', y: 12345678 },
  { x: '클릭수', y: 12345678 },
  { x: '전환수', y: 12345678 },
]

const naver2 = [
  { x: '광고비', y: 2345678 },
  { x: '매출', y: 2345678 },
  { x: '노출수', y: 2345678 },
  { x: '클릭수', y: 2345678 },
  { x: '전환수', y: 2345678 },
]

const facebook2 = [
  { x: '광고비', y: 345678 },
  { x: '매출', y: 345678 },
  { x: '노출수', y: 345678 },
  { x: '클릭수', y: 345678 },
  { x: '전환수', y: 345678 },
]

const kakao2 = [
  { x: '광고비', y: 1199000 },
  { x: '매출', y: 1199000 },
  { x: '노출수', y: 1199000 },
  { x: '클릭수', y: 1199000 },
  { x: '전환수', y: 1199000 },
]

const result = [google2, naver2, facebook2, kakao2]

const Chart = () => {
  const totals = result[0].map((_, i) => {
    return result.reduce((memo, curr) => {
      return memo + curr[i].y
    }, 0)
  })

  const mental = result.map((data) => {
    return data.map((datum, i) => {
      return { x: datum.x, y: (datum.y / totals[i]) * 100, k: Math.round(datum.y) }
    })
  })

  return (
    <div>
      <VictoryChart domainPadding={{ x: 50, y: 10 }} theme={VictoryTheme.material}>
        <VictoryAxis tickFormat={['광고비', '매출', '노출수', '클릭수', '전환수']} />
        <VictoryAxis dependentAxis tickFormat={(tick) => `${tick}%`} />

        <VictoryStack colorScale='warm'>
          {mental.map((data, i) => {
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
        colorScale='warm'
        data={[{ name: 'google' }, { name: 'naver' }, { name: 'facebook' }, { name: 'kakao' }]}
      />
    </div>
  )
}

export default Chart
