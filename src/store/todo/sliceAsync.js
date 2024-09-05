import { createSelector, createSlice } from '@reduxjs/toolkit'
import { fetchTodosOp, removeTodoOp, updateTodoOp } from './operations'
import { selectSearch } from '../filterSlice'

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

export const selectTodos = (state) => state.todo.todos
export const selectLoading = (state) => state.todo.isLoading
export const selectError = (state) => state.todo.error

// export const selectFilteredTodos = (state) => {
// 	const todos = selectTodos(state)
// 	const filterValue = selectSearch(state)
// 	console.log('select...')
// 	return todos?.filter((el) =>
// 		el.title.toLowerCase().includes(filterValue.toLowerCase())
// 	)
// }

export const selectFilteredTodos = createSelector(
	[selectTodos, selectSearch],
	(todos, filterValue) => {
		console.log('select...')
		return todos?.filter((el) =>
			el.title.toLowerCase().includes(filterValue.toLowerCase())
		)
	}
)
