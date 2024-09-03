import { createSlice } from '@reduxjs/toolkit'
import { fetchTodosOp, removeTodoOp, updateTodoOp } from './operations'

const initialState = {
	todos: [],
	isLoading: false,
	error: false,
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	extraReducers: (builder) =>
		builder
			.addCase(fetchTodosOp.pending, (state) => {
				state.isLoading = true
			})
			.addCase(fetchTodosOp.fulfilled, (state, { payload }) => {
				state.todos = payload
				state.isLoading = false
			})
			.addCase(fetchTodosOp.rejected, (state, { error }) => {
				state.error = error.code
				state.isLoading = false
			})
			.addCase(removeTodoOp.pending, (state) => {
				state.isLoading = true
			})
			.addCase(removeTodoOp.fulfilled, (state, { payload }) => {
				state.todos = state.todos.filter((el) => el.id !== payload.id)
				state.isLoading = false
			})
			.addCase(removeTodoOp.rejected, (state) => {
				state.error = true
				state.isLoading = false
			})
			.addCase(updateTodoOp.pending, (state) => {
				state.isLoading = true
			})
			.addCase(updateTodoOp.fulfilled, (state, { payload }) => {
				state.todos = state.todos.map((el) => {
					if (el.id === payload.id) {
						return { ...payload }
					} else return el
				})
				state.isLoading = false
			})
			.addCase(updateTodoOp.rejected, (state) => {
				state.error = true
				state.isLoading = false
			}),
})

export const todoSliceReducer = todoSlice.reducer
