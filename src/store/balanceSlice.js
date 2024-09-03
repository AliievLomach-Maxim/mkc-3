import { createSlice } from '@reduxjs/toolkit'

// export const depositAction = createAction('balance/deposit')
// export const withdrawAction = createAction('balance/withdraw')

// export const deposit =(value) => {
// 	return {
// 		type: 'balance/deposit',
// 		payload: value,
// 	}
// }

// export const withdraw = (value) => {
// 	return {
// 		type: 'balance/withdraw',
// 		payload: value,
// 	}
// }

const initialState = {
	value: 10000,
	a: 10,
}

export const balanceSlice = createSlice({
	name: 'balance',
	initialState,
	reducers: {
		deposit: (state, { payload }) => {
			state.value += payload
		},
		withdraw: (state, action) => {
			state.value += action.payload
		},
		// withdraw(state, action) {
		// 	state.value += action.payload
		// },
		// withdraw:function(state, action) {
		// 	state.value += action.payload
		// },
	},
})

export const { deposit, withdraw } = balanceSlice.actions
export const balanceReducer = balanceSlice.reducer

// export const balanceReducer = createReducer(initialState, (builder) => {
// 	builder.addCase(depositAction, (state, action) => {
// 		state.value += action.payload
// 	})
// 	builder.addCase(withdrawAction, (state, action) => {
// 		state.value -= action.payload
// 	})
// })

// export const balanceReducer = createReducer(initialState, (builder) => {
// 	builder.addCase(depositAction, (state, action) => {
// 		return {
// 			...state,
// 			value: state.value + action.payload,
// 		}
// 	})
// 	builder.addCase(withdrawAction, (state, action) => {
// 		return {
// 			...state,
// 			value: state.value - action.payload,
// 		}
// 	})
// })

// export const balanceReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case 'balance/deposit':
// 			return {
// 				...state,
// 				value: state.value + action.payload,
// 			}
// 		case 'balance/withdraw':
// 			return {
// 				...state,
// 				value: state.value - action.payload,
// 			}

// 		default:
// 			return state
// 	}
// }
