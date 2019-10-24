export function searchKeyword(payload) {
	return (dispatch) => {
		dispatch(setKeyword(payload));
		dispatch(getCategoryKeyword(payload));
	};
}

function setKeyword(payload) {
	return {
		type: 'SEARCH_SET_KEYWORD',
		payload: payload
	};
}

function getCategoryKeyword(payload) {
	return {
		type: 'SEARCH_API_CATEGORY_KEYWORD',
		payload: payload
	};
}
