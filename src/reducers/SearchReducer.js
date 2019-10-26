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
	clueResults: [
		{
			id: 146224,
			answer: 'swing voters',
			question:
				"2-word term for the group who will determine an election outcome; in a 2008 movie it's just one guy, Kevin Costner",
			value: 600,
			airdate: '2014-07-08T12:00:00.000Z',
			created_at: '2015-01-22T02:33:08.149Z',
			updated_at: '2015-01-22T02:33:08.149Z',
			category_id: 1,
			game_id: 4557,
			invalid_count: null,
			category: {
				id: 1,
				title: 'politics',
				created_at: '2014-02-11T22:47:18.687Z',
				updated_at: '2014-02-11T22:47:18.687Z',
				clues_count: 30
			}
		}
	],
	clueOffSetInterval: 0,
	// Misc
	error: null,
	searched: true,
	loader: false
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
				clueResults: action.payload.clues,
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
