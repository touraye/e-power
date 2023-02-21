import { createSlice } from '@reduxjs/toolkit'
import { tokenList } from '../../Data/data'

const initialState = tokenList

const tokenSlice = createSlice({
	name: 'token',
	initialState,
	reducers: {
		setState(state, action) {
			return (state = action.payload)
		},
		getState(state, action) {
			return state
		},
		appendToken(state, action) {
			state.push(action.payload)
		},
		removeToken(state, action) {
			return state.filter((item) => item.meterNumber !== action.payload)
		},
		editToken( state, action ) {
			const id = action.payload.id
			const tokenToEdit = action.payload
			return state.map(token => token.id !== id ? token : tokenToEdit)
		},
	},
})

export const { setState, getState, appendToken, removeToken, editToken } =
	tokenSlice.actions

export const setToken = (data) => {
	return (dispatch) => {
		dispatch(setState(data))
	}
}

export const registerToken = (data) => {
	return (dispatch) => {
		dispatch(appendToken(data))
	}
}

export const unregisterToken = (meterNumber) => {
	return (dispatch) => {
		dispatch(removeToken(meterNumber))
	}
}

export const updateToken = ( token ) => {
	return dispatch => {
		const updatedToken = {
			...token,
			used: true
		}
		dispatch(editToken(updatedToken))
	}
}

export default tokenSlice.reducer
