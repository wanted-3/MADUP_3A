import Chart from './Chart'
import Table from './Table'

export default function MediaStatus() {
  return (
    <div>
      <Chart />
      <Table />
    </div>
  )
}

// ex) 2월 7일 ~ 2월 11일 (5일)
// 각 회사별로 5일치 데이터 불러와서 합치기

// media channel data
// {
//   "channel": "facebook",
//   "date": "2022-02-09",
//   "imp": 17366, //광고가 노출된 횟수
//   "click": 291, //클릭수
//   "cost": 260445, // 비용, 매출
//   "convValue": 7, // 변환수
//   "ctr": 1.6757, //클릭률
//   "cvr": 2.4055, //전환율
//   "cpc": 895.0000, //클릭당 지불
//   "cpa": 37206.4286, //행동당 비용
//   "roas": 151.9438 //광고대비수익률 //=> (수익/광고비) * 100
//   //+ 매출 : roas * cost /100
// },

// 데이터 parsing과정
// 1. 회사별로 날짜에 맞추어 합쳐주고 필요한것만 남긴다
// {
//   "channel": "facebook",
//   "광고비" : cost
//   "매출": 2345678, //roas * cost / 100
//  "roas" : 2345678
//   "노출수": 2345678, //imp
//   "클릭수": 2345678, //click
//  "클릭률": 2345678, //ctr
//   클릭당비용: 2345678, //cpc
// }
// 2. 배열로 만든다
// [회사이름<string>,광고비, 매출, roas, 노출수, 클릭수, 클릭률, 클릭당비용] 7개
// 3. const result =  {statistics : [google배열, facebook배열...], totals: ['총계',34134...]]
// 총합배열(totals)까지 포함한 result배열을 return한다

// bar 항목에는 mental로 가공해서 보내기
