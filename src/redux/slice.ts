import { createSlice } from '@reduxjs/toolkit'

// import { fetchRegions } from './services/api'

import { adData, mediaData, trendData } from './data'

const initialState = {
  ads: adData,
  trend: trendData,
  media: mediaData,
}

const reducers = {
  setRegions: (state, { payload: regions }) => ({ ...state, regions }),
}

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers,
})

export const { setRegions } = actions

export default reducer
