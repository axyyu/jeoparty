export function saveFavorites(payload) {
	localStorage.setItem('favorites', JSON.stringify(payload));
}
