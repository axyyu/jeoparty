import React from 'react';

import FavoritesList from '../../components/FavoritesList';
import './FavoritesPage.scss';

function FavoritesPage() {
	return (
		<div className="favorites-page">
			<h1>My Favorites</h1>
			<FavoritesList />
		</div>
	);
}

export default FavoritesPage;
