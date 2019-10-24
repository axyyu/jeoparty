const initialState = {
	fromDate: null,
	toDate: null,
	difficulty: null,
	category: [],
	keyword: null,
	categoryResults: [],
	error: null
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
		case 'SEARCH_SET_KEYWORD': {
			return {
				...state,
				keyword: action.payload.keyword
			};
		}
		case 'SEARCH_SET_CATEGORY_KEYWORD_SUCCESS': {
			return {
				...state,
				categoryResults: action.payload.categories
			};
		}
		case 'SEARCH_SET_DIFFICULTY': {
			break;
		}
		case 'SEARCH_SET_ERROR': {
			return {
				...state,
				error: action.payload.error
			};
		}
		default:
			return state;
	}
	return state;
}
