const initialState = {
	// Filters
	fromDate: null,
	toDate: null,
	difficulty: [],
	category: [],
	keyword: '',
	categoryResults: [],
	// Clues
	clueOffset: 0,
	clueResults: [],
	clueOffSetInterval: 0,
	// Misc
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
			return {
				...state,
				category: action.payload.category
			};
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
			return {
				...state,
				difficulty: action.payload.difficulty
			};
		}
		case 'SEARCH_SET_CLUES_SUCCESS': {
			return {
				...state,
				clueResults: action.payload.clues
			};
		}
		case 'SEARCH_SET_CLUE_OFFSET_INTERVAL': {
			return {
				...state,
				clueOffSetInterval: action.payload.interval,
				clueOffset: 0
			};
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
