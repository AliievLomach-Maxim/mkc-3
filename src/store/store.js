import { balanceReducer } from './balanceSlice'
import { localReducer } from './localSlice'
import { configureStore } from '@reduxjs/toolkit'
import { todoSliceReducer } from './todo/sliceAsync'
import { filterReducer } from './filterSlice'

const rootReducer = {
	balance: balanceReducer,
	local: localReducer,
	todo: todoSliceReducer,
	filter: filterReducer,
}

export const store = configureStore({
	reducer: rootReducer,
})
