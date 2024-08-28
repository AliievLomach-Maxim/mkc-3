// import { balanceReducer } from './balanceSlice'
import { balanceReducer } from './balanceSlice'
import { localReducer } from './localSlice'
import { configureStore } from '@reduxjs/toolkit'
import { todoReducer } from './todo/slice'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'todo',
	storage,
	whitelist: ['todos'],
}

const persistedTodoReducer = persistReducer(persistConfig, todoReducer)

const rootReducer = {
	balance: balanceReducer,
	local: localReducer,
	todo: persistedTodoReducer,
}

export const store = configureStore({
	reducer: rootReducer,
})

export const persistor = persistStore(store)

// // import { balanceReducer } from './balanceSlice'
// import { balanceReducer } from './balanceSlice'
// import { localReducer } from './localSlice'
// import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import { todoReducer } from './todo/slice'

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
// 	key: 'todo',
// 	storage,
// }

// const rootReducer = combineReducers({
// 	balance: balanceReducer,
// 	local: localReducer,
// 	todo: todoReducer,
// })

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
// 	reducer: persistedReducer,
// })

// export const persistor = persistStore(store)
