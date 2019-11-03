export function setupSimulation() {
	return (dispatch, getState) => {
		const state = getState();

		for (let category in state.simCategory) {
			for (let difficulty in state.simDifficulty) {
				const payload = {
					value: state.simDifficulty[difficulty] ? state.simDifficulty[difficulty].value : null,
					category: state.simCategory[category] ? state.simCategory[category].value : null,
					offset: 0,
					count: 1
				};
				dispatch(getClues(payload));
			}
		}
	};
}

function getClues(payload) {
	return {
		type: 'SIMULATION_API_CLUES',
		payload: payload
	};
}

export function getPopularCategory() {
	return {
		type: 'SIMULATION_API_CATEGORY_KEYWORD',
		payload: { keyword: '' }
	};
}

export function resetSimulation() {
	return {
		type: 'SIMULATION_RESET_SIMULATION',
		payload: { keyword: '' }
	};
}
