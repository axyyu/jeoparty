const initialState = {
	fromDate: null,
	toDate: null,
	difficulty: null,
	category: null
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'SEARCH_GET_CLUES_PENDING': {
			break;
		}
		case 'SEARCH_SET_DATE_RANGE': {
			return {
				...state,
				fromDate: action.payload.from,
				toDate: action.payload.to
			};
		}
		case 'SEARCH_SET_CATEGORY': {
			break;
		}
		case 'SEARCH_SET_DIFFICULTY': {
			break;
		}
		default:
			return state;
	}
	return state;
}
