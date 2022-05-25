import { createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit'
import { IDropDown } from '../types/dropdown.d'
import { ImediaData } from '../types/mediaData.d'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'

import { IAd } from '../types/adDate.d'
import { ItrendData } from '../types/trendData.d'
import { ImediaChart } from '../types/mediaChart.d'
import { ImediaTable } from '../types/mediaTable.d'

// import { fetchRegions } from './services/api'
import { adData, mediaData, trendData } from './data'

const INIT_DROP = [
  {
    id: 0,
    title: 'ROAS',
    order: 1,
  },
  {
    id: 1,
    title: '광고비',
    order: 0,
  },
  {
    id: 2,
    title: '노출수',
    order: 0,
  },
  {
    id: 3,
    title: '클릭수',
    order: 2,
  },
  {
    id: 4,
    title: '전환수',
    order: 0,
  },
  {
    id: 5,
    title: '매출',
    order: 0,
  },
]
const INIT_ADS = [
  { id: 1, title: '전체', order: 4, value: 'all' },
  { id: 2, title: '진행중', order: 0, value: 'active' },
  { id: 3, title: '중단됨', order: 0, value: 'ended' },
]
const INIT_DATE: string[] = []

export interface DataState {
  ads: IAd[]
  trend: ItrendData[]
  media: ImediaData[]
  dropList: IDropDown[]
  selectedDate: string[]
  adsDrop: IDropDown[]
  mediaChart: ImediaChart[][]
  mediaTable: ImediaTable
}

const initialState: DataState = {
  ads: adData,
  trend: trendData,
  media: mediaData,
  dropList: INIT_DROP,
  selectedDate: INIT_DATE,
  adsDrop: INIT_ADS,
  mediaChart: [],
  mediaTable: {
    statistics: [],
    totals: [],
  },
}

const reducers = {
  setAds: (state: DataState, action: PayloadAction<IAd>) => ({ ...state, action }),
  setDropDown: (state: DataState, action: PayloadAction<IDropDown[]>) => {
    state.dropList = action.payload
  },
  setAdsDropDown: (state: DataState, action: PayloadAction<IDropDown[]>) => {
    state.adsDrop = action.payload
  },
  setDate: (state: DataState, action: PayloadAction<string[]>) => {
    state.selectedDate = action.payload
  },
  setMediaChart: (state: DataState, action: PayloadAction<any>) => ({ ...state, mediaChart: action.payload }),
  setMediaTable: (state: DataState, action: PayloadAction<any>) => ({
    ...state,
    mediaTable: action.payload,
  }),
}

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers,
})

export const getDropList = (state: DataState): IDropDown[] => state.dropList
export const getTrendads = (state: DataState): ItrendData[] => state.trend
export const getAdsData = (state: DataState): IAd[] => state.ads
export const getMedia = (state: DataState): ImediaData[] => state.media
export const getDate = (state: DataState): string[] => state.selectedDate
export const getAdsDrop = (state: DataState): IDropDown[] => state.adsDrop
export default reducer
export const { setAds, setMediaChart, setMediaTable, setDropDown, setDate, setAdsDropDown } = actions

function sliceMediaData(firstDay: string, lastDay: string, datas: Array<any>) {
  const facebook: Array<any> = []
  const google: Array<any> = []
  const naver: Array<any> = []
  const kakao: Array<any> = []

  //   const seperator = {
  //     facebook(data: Array<any>) {
  //       facebook.push(data)
  //     },

  //     google(data: Array<any>) {
  //       google.push(data)
  //     },

  //     kakao(data: Array<any>) {
  //       kakao.push(data)
  //     },

  //     naver(data: Array<any>) {
  //       naver.push(data)
  //     },
  //   }

  dayjs.extend(isSameOrAfter)
  dayjs.extend(isSameOrBefore)

  datas.forEach((data) => {
    const { date, channel } = data

    const isDate = dayjs(date).isSameOrAfter(dayjs(firstDay)) && dayjs(date).isSameOrBefore(dayjs(lastDay)) && true
    // isDate === true && seperator[channel](data)

    if (isDate === true) {
      if (channel === 'facebook') {
        facebook.push(data)
      } else if (channel === 'google') {
        google.push(data)
      } else if (channel === 'kakao') {
        kakao.push(data)
      } else if (channel === 'naver') {
        naver.push(data)
      }
    }
  })

  return [facebook, google, naver, kakao]
}

export function loadMediaData(
  firstDay = '2022-02-01',
  lastDay = '2022-02-07'
): ThunkAction<Promise<void>, any, null, any> {
  return async (dispatch, getState) => {
    const { media } = getState()

    // 회사별, 날짜별로 데이터 묶어주기
    const slicedData = sliceMediaData(firstDay, lastDay, media)

    // 묶인 파일 회사별로 합쳐주기
    // ChartBar, Table에서 쓸 데이터
    let chartData: Array<any> = []
    let statistics: Array<any> = []
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
