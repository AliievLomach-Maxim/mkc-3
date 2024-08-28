import { createSlice, nanoid } from '@reduxjs/toolkit'
import data from '../../../todoData.json'

const initialState = {
	todos: data,
	privateField: 'private',
}

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: {
			prepare: (data) => {
				const newTodo = {
					...data,
					completed: false,
					id: nanoid(),
				}
				return {
					payload: newTodo,
				}
			},
			reducer: (state, { payload }) => {
				state.todos.push(payload)
			},
		},
		// addTodo: (state, { payload }) => {
		// 	state.todos.push(payload)
		// },
		removeTodo: (state, { payload }) => {
			state.todos = state.todos.filter((el) => el.id !== payload)
		},
		toggleTodo: (state, { payload }) => {
			state.todos = state.todos.map((el) => {
				if (el.id === payload) {
					return {
						...el,
						completed: !el.completed,
					}
				}
				return el
			})
		},
	},
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions
export const todoReducer = todoSlice.reducer
