import { saveFavorites } from '../../../utils/SaveFavorites';

export function removeFavorite(payload) {
	return (dispatch, getState) => {
		const state = getState();
		const favorites = { ...state.favorites };

		if (payload.id in favorites) {
			delete favorites[payload.id];
		}

		saveFavorites(favorites);

		dispatch(updateFavorites(favorites));
	};
}

function updateFavorites(payload) {
	return {
		type: 'FAVORITES_UPDATE_FAVORITES',
		payload: payload
	};
}
