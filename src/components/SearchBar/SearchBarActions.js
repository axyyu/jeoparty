export function searchClues() {
	return (dispatch, getState) => {
		const state = getState();

		const categoryCount = Math.max(state.category.length, 1);
		const difficultyCount = Math.max(state.difficulty.length, 1);

		const interval = Math.min(Math.floor(50 / (categoryCount * difficultyCount)), 50);

		dispatch(setClueOffsetInterval({ interval }));

		const categories = state.category.length > 0 ? state.category : [ null ];
		const difficulties = state.difficulty.length > 0 ? state.difficulty : [ null ];

		for (let category in categories) {
			for (let difficulty in difficulties) {
				const payload = {
					value: difficulties[difficulty] ? difficulties[difficulty].value : null,
					category: categories[category] ? categories[category].value : null,
					min_date: state.fromDate,
					max_date: state.toDate,
					offset: 0,
					count: interval
				};
				dispatch(getClues(payload));
			}
		}
	};
}

function getClues(payload) {
	return {
		type: 'SEARCH_API_CLUES',
		payload: payload
	};
}

function setClueOffsetInterval(payload) {
	return {
		type: 'SEARCH_SET_CLUE_OFFSET_INTERVAL',
		payload: payload
	};
}

export function getPopularCategory() {
	return {
		type: 'SEARCH_API_CATEGORY_KEYWORD',
		payload: { keyword: '' }
	};
}
