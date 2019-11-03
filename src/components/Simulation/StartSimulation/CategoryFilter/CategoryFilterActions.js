export function searchKeyword(payload) {
	return (dispatch) => {
		dispatch(setKeyword(payload));
		dispatch(getCategoryKeyword(payload));
	};
}

function setKeyword(payload) {
	return {
		type: 'SIMULATION_SET_KEYWORD',
		payload: payload
	};
}

function getCategoryKeyword(payload) {
	return {
		type: 'SIMULATION_API_CATEGORY_KEYWORD',
		payload: payload
	};
}

export function setCategory(payload) {
	return {
		type: 'SIMULATION_SET_CATEGORY',
		payload: payload
	};
}
