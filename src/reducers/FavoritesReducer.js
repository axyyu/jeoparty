export default function reducer(state, action) {
	switch (action.type) {
		case 'FAVORITES_UPDATE_FAVORITES': {
			return {
				...state,
				favorites: action.payload
			};
		}
		default:
			return state;
	}
}
