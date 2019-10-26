export function searchClues() {
	return (dispatch, getState) => {
		const state = getState();

		const categoryCount = state.category.length;
		const difficultyCount = state.difficulty.length;

		const interval = Math.min(Math.floor(100 / (categoryCount * difficultyCount)), 100);
		dispatch(setClueOffsetInterval({ interval }));

		const categories = categoryCount > 0 ? state.category : [ null ];
		const difficulties = difficultyCount > 0 ? state.difficuly : [ null ];

		for (let category in categories) {
			for (let difficulty in difficulties) {
				const payload = {
					value: difficulties[difficulty],
					category: categories[category] ? categories[category].value : null,
					min_date: state.fromDate,
					max_date: state.toDate,
					offset: 0
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
