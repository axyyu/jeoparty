export function searchNextClues(payload) {
	return (dispatch, getState) => {
		const state = getState();

		const categories = state.category.length > 0 ? state.category : [ null ];
		const difficulties = state.difficulty.length > 0 ? state.difficuly : [ null ];

		const offset = payload.offset * state.clueOffSetInterval;

		dispatch(setClueOffset(payload));

		for (let category in categories) {
			for (let difficulty in difficulties) {
				const payload = {
					value: difficulties[difficulty],
					category: categories[category] ? categories[category].value : null,
					min_date: state.fromDate,
					max_date: state.toDate,
					offset: offset,
					count: state.clueOffSetInterval
				};
				dispatch(getClues(payload));
			}
		}
	};
}

function setClueOffset(payload) {
	return {
		type: 'SEARCH_SET_CLUE_OFFSET',
		payload: payload
	};
}

function getClues(payload) {
	return {
		type: 'SEARCH_API_CLUES',
		payload: payload
	};
}
