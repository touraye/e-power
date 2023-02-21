import { configureStore } from '@reduxjs/toolkit'
import meterReducer from './meter/meterSlice'
import tokenReducer from './token/tokenSlice'

export const store = configureStore( {
  reducer: {
    meter: meterReducer,
    token: tokenReducer,
  }
})