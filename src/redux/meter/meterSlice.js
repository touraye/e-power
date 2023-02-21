import { createSlice } from "@reduxjs/toolkit";
import {meterList} from '../../Data/data'

const initialState = meterList

const meterSlice = createSlice( {
  name: 'meter',
  initialState,
  reducers: {
    setState( state, action ) {
      return (state = action.payload)
    },
    getState( state, action ) {
      return state
    },
    appendMeter( state, action ) {
      state.push(action.payload)
    },
    removeMeter(state,action) {
      return state.filter((item)=> item.meterNumber !== action.payload)
    }
  }
} )

export const { setState, getState, appendMeter, removeMeter } = meterSlice.actions

export const setMeter = (data) => {
  return dispatch => {
    dispatch(setState(data))
  }
}

export const registerMeter = ( data ) => {
  return dispatch => {
    dispatch(appendMeter(data))
  }
}

export const unregisterMeter = ( meterNumber ) => {
  return dispatch => {
    dispatch(removeMeter(meterNumber))
  }
}

export default meterSlice.reducer