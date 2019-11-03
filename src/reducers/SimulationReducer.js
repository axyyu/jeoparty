var initialState = {
	simulation: false,
	simBoard: {},
	simLoader: false,
	simDifficulty: [
		{ value: 100, label: 100 },
		{ value: 200, label: 200 },
		{ value: 300, label: 300 },
		{ value: 400, label: 400 },
		{ value: 500, label: 500 }
	],
	simCategory: [
		{ value: '306', label: 'Potpourriiii' },
		{ value: '136', label: 'Stupid Answers' },
		{ value: '42', label: 'Sports' },
		{ value: '780', label: 'American History' },
		{ value: '21', label: 'Animals' }
	],
	simKeyword: '',
	simCategoryResults: [],
	simError: null,
	question: null
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case 'SIMULATION_RESET_SIMULATION': {
			return Object.assign({ ...state }, { ...initialState });
		}
		case 'SIMULATION_START_SIMULATION': {
			return {
				...state,
				simulation: true,
				simLoader: false,
				error: null
			};
		}
		case 'SIMULATION_END_SIMULATION': {
			return {
				...state,
				simulation: false
			};
		}
		case 'SIMULATION_SET_CATEGORY': {
			return {
				...state,
				simCategory: action.payload.category ? action.payload.category : []
			};
		}
		case 'SIMULATION_SET_KEYWORD': {
			return {
				...state,
				simKeyword: action.payload.keyword
			};
		}
		case 'SIMULATION_SET_CATEGORY_KEYWORD_SUCCESS': {
			return {
				...state,
				simCategoryResults: action.payload.categories
			};
		}
		case 'SIMULATION_SET_DIFFICULTY': {
			return {
				...state,
				simDifficulty: action.payload.difficulty ? action.payload.difficulty : []
			};
		}
		case 'SIMULATION_SET_ERROR': {
			return {
				...state,
				simError: action.payload.error,
				simLoader: false
			};
		}
		case 'SIMULATION_SET_CLUES_PENDING': {
			return {
				...state,
				simLoader: true
			};
		}
		case 'SIMULATION_SET_CLUES_SUCCESS': {
			return {
				...state,
				simBoard: action.payload.board
			};
		}
		case 'SIMULATION_SHOW_QUESTION': {
			return {
				...state,
				question: action.payload
			};
		}
		case 'SIMULATION_HIDE_QUESTION': {
			return {
				...state,
				question: null
			};
		}
		default:
			return state;
	}
}
