import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAd } from '../types/adData.d'
import { ImediaData } from '../types/mediaData.d'
import { ItrendData } from '../types/trendData.d'

// import { fetchRegions } from './services/api'

import { adData, mediaData, trendData } from './data'

export interface DataState {
  ads: IAd[]
  trend: ItrendData[]
  media: ImediaData[]
}
const initialState: DataState = {
  ads: adData,
  trend: trendData,
  media: mediaData,
}

const reducers = {
  setAds: (state: DataState, action: PayloadAction<IAd>) => ({ ...state, action }),
}

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers,
})

export const { setAds } = actions

export default reducer
