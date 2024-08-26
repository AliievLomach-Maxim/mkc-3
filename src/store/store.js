import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from '@redux-devtools/extension'
import { balanceReducer } from './balanceSlice'
import { localReducer } from './localSlice'

const reducer = combineReducers({
	balance: balanceReducer,
	local: localReducer,
})

export const store = createStore(reducer, devToolsEnhancer())

// const initialState = {
// 	balance: {
// 		value: 10000,
// 		a: 10,
// 	},
// 	local: {
// 		lang: 'en',
// 	},
// }

// reducer(undefined, { type: '@@redux/INIT3.g.c.8.u' })
