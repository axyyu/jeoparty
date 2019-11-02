export function initializeApp() {
	return (dispatch) => {
		const favorites = loadFavorites();
		dispatch(updateFavorites(favorites));
	};
}

function loadFavorites() {
	let saved = {};
	try {
		saved = JSON.parse(localStorage.getItem('favorites'));
	} catch (err) {
		console.log('Error loading favorites from local memory. Resetting to empty JSON.');
	}

	return saved ? saved : {};
}

function updateFavorites(payload) {
	return {
		type: 'FAVORITES_UPDATE_FAVORITES',
		payload: payload
	};
}
