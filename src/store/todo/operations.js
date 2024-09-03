import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = 'https://64689aefe99f0ba0a8286f54.mockapi.io'

// export const fetchTodosOp = createAsyncThunk(
// 	'todos/fetchAll',
// 	async (_, { rejectWithValue }) => {
// 		try {
// 			const { data } = await axios.get('/todos')
// 			return data
// 		} catch (error) {
// 			console.log('error', error)
// 			return rejectWithValue(error)
// 		}
// 	}
// )
export const fetchTodosOp = createAsyncThunk('todos/fetchAll', async () => {
	const { data } = await axios.get('/todos')
	return data
})

export const removeTodoOp = createAsyncThunk('todos/removeTodo', async (id) => {
	const { data } = await axios.delete(`/todos/${id}`)
	return data
})

export const updateTodoOp = createAsyncThunk(
	'todos/updateTodo',
	async ({ id, newTodo }) => {
		const { data } = await axios.put(`/todos/${id}`, newTodo)
		return data
	}
)
