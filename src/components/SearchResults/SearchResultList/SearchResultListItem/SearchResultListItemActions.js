import { saveFavorites } from '../../../../utils/SaveFavorites';

export function toggleFavorite(payload) {
	return (dispatch, getState) => {
		const state = getState();
		const favorites = { ...state.favorites };

		if (payload.id in favorites) {
			delete favorites[payload.id];
		} else {
			favorites[payload.id] = payload;
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
