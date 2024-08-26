const initialState = {
	lang: 'en',
}

export const changeLang = (value) => ({
	type: 'local/changeLang',
	payload: value,
})

export const localReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'local/changeLang':
			return {
				...state,
				lang: action.payload,
			}

		default:
			return state
	}
}
