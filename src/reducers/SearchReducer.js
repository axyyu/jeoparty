const initialState = {
	// Filters
	fromDate: null,
	toDate: null,
	difficulty: [],
	category: [],
	keyword: '',
	categoryResults: [],
	// Clues
	query: {},
	clueOffset: 0,
	clueResults: [],
	clueOffSetInterval: 0,
	// Misc
	error: null,
	searched: false,
	loader: false,
	// Favorites
	favorites: {},
	// Simulation
	simulation: false,
	simBoard: {},
	simLoader: false,
	simDifficulty: [],
	simCategory: [],
	simKeyword: '',
	simCategoryResults: [],
	simError: null
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'SEARCH_SET_CLUES_PENDING': {
			return {
				...state,
				loader: true
			};
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
				category: action.payload.category ? action.payload.category : []
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
				difficulty: action.payload.difficulty ? action.payload.difficulty : []
			};
		}
		case 'SEARCH_SET_CLUES_SUCCESS': {
			const results = state.clueResults.concat(action.payload.clues);
			return {
				...state,
				clueResults: results,
				searched: true,
				loader: false
			};
		}
		case 'SEARCH_SET_CLUE_OFFSET_INTERVAL': {
			return {
				...state,
				clueOffSetInterval: action.payload.interval,
				clueOffset: 0,
				clueResults: []
			};
		}
		case 'SEARCH_SET_CLUE_OFFSET': {
			return {
				...state,
				clueOffset: action.payload.offset,
				clueResults: []
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
}
