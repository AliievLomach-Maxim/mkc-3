import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
	name: 'filters',
	initialState: { search: '' },
	reducers: {
		changeFilter: (state, { payload }) => {
			state.search = payload
		},
	},
})

export const { changeFilter } = filterSlice.actions
export const filterReducer = filterSlice.reducer

export const selectSearch = (state) => state.filter.search
