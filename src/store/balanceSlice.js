export const deposit = (value) => {
	return {
		type: 'balance/deposit',
		payload: value,
	}
}

export const withdraw = (value) => {
	return {
		type: 'balance/withdraw',
		payload: value,
	}
}

const initialState = {
	value: 10000,
	a: 10,
}

export const balanceReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'balance/deposit':
			return {
				...state,
				value: state.value + action.payload,
			}
		case 'balance/withdraw':
			return {
				...state,
				value: state.value - action.payload,
			}

		default:
			return state
	}
}
