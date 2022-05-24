import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

import { createSlice } from '@reduxjs/toolkit'

// import { fetchRegions } from './services/api'

import { adData, mediaData, trendData } from './data'

const initialState = {
  ads: adData,
  trend: trendData,
  media: mediaData,
  mediaChart: [],
  mediaTable: {
    statistics: [],
    totals: [],
  },
}

const reducers = {
  setRegions: (state, { payload: regions }) => ({ ...state, regions }),
  setMediaChart: (state, { payload: chartData }) => ({ ...state, mediaChart: chartData }),
  setMediaTable: (state, { payload: { statistics, totals } }) => ({
    ...state,
    mediaTable: {
      statistics,
      totals,
    },
  }),
}

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers,
})

export const { setRegions, setMediaChart, setMediaTable } = actions

export default reducer

function sliceMediaData(firstDay, lastDay, datas) {
  const facebook = []
  const google = []
  const naver = []
  const kakao = []

  const seperator = {
    facebook(data) {
      facebook.push(data)
    },

    google(data) {
      google.push(data)
    },

    kakao(data) {
      kakao.push(data)
    },

    naver(data) {
      naver.push(data)
    },
  }

  dayjs.extend(isSameOrAfter)
  dayjs.extend(isSameOrBefore)

  datas.forEach((data) => {
    const { date, channel } = data

    const isDate = dayjs(date).isSameOrAfter(dayjs(firstDay)) && dayjs(date).isSameOrBefore(dayjs(lastDay)) && true
    isDate === true && seperator[channel](data)
  })

  return [facebook, google, naver, kakao]
}

export function loadMediaData(firstDay = '2022-02-22', lastDay = '2022-02-25') {
  return async (dispatch, getState) => {
    const { media } = getState()

    // 회사별, 날짜별로 데이터 묶어주기
    const slicedData = sliceMediaData(firstDay, lastDay, media)

    // 묶인 파일 회사별로 합쳐주기
    // ChartBar, Table에서 쓸 데이터
    let chartData = []
    let statistics = []
    slicedData.forEach((company) => {
      const companyData = company.reduce((obj, cur) => {
        if (!obj.channel) obj.channel = cur.channel

        Object.keys(cur).forEach((property) => {
          if (property === 'channel' || property === 'date') return
          obj[property] ? (obj[property] += cur[property]) : (obj[property] = cur[property])
        })
        return obj
      }, {})
      const { channel, cost, roas, imp, click, ctr, cpc, convValue } = companyData

      const floor = {
        sales: Math.floor((roas * cost) / 100),
        ctr: Math.floor(ctr),
        cpc: Math.floor(cpc),
        roas: Math.floor(roas),
      }

      chartData.push([
        { x: '광고비', y: cost },
        { x: '매출', y: floor.sales },
        { x: '노출수', y: imp },
        { x: '클릭수', y: click },
        { x: '전환수', y: convValue },
      ])
      statistics.push([channel, cost, floor.sales, floor.roas, imp, click, floor.ctr, floor.cpc])
    })

    // 총합 구하기
    let totals = ['총계', 0, 0, 0, 0, 0, 0, 0]
    statistics.forEach((companyData) => {
      for (let i = 1; i < companyData.length; i += 1) {
        totals[i] += companyData[i]
      }
    })
    totals = totals.map((value) => value.toLocaleString('ko-kr'))

    // [facebook, google, naver, kakao] 순으로 저장된 데이터
    dispatch(setMediaChart(chartData))
    dispatch(
      setMediaTable({
        statistics,
        totals,
      })
    )
  }
}
