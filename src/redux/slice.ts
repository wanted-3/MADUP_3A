import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAd } from '../types/adData.d'
import { IDropDown } from '../types/dropdown.d'
import { ImediaData } from '../types/mediaData.d'
import { ItrendData } from '../types/trendData.d'
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
export interface DataState {
  ads: IAd[]
  trend: ItrendData[]
  media: ImediaData[]
  dropList: IDropDown[]
}

const initialState: DataState = {
  ads: adData,
  trend: trendData,
  media: mediaData,
  dropList: INIT_DROP,
}

const reducers = {
  setAds: (state: DataState, action: PayloadAction<IAd>) => ({ ...state, action }),
  setDropDown: (state: DataState, action: PayloadAction<IDropDown[]>) => {
    state.dropList = action.payload
  },
}

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers,
})

export const { setAds } = actions
export const { setDropDown } = actions
export const getDropList = (state: DataState): IDropDown[] => state.dropList
export const getTrendads = (state: DataState): ItrendData[] => state.trend
export const getadsData = (state: DataState): IAd[] => state.ads
export const getMedia = (state: DataState): ImediaData[] => state.media

export default reducer
