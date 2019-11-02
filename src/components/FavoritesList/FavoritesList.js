import React from 'react';
import { connect } from 'react-redux';

import FavoritesListItem from './FavoritesListItem';
import './FavoritesList.scss';

class FavoritesList extends React.Component {
	render() {
		const favoriteIds = Object.keys(this.props.favorites);
		const items =
			favoriteIds.length > 0 ? (
				favoriteIds.map((key) => {
					const obj = this.props.favorites[key];
					return <FavoritesListItem key={key} {...obj} />;
				})
			) : (
				<p>Sorry, no results were found. Try going back a page?</p>
			);

		return <ul className="favorites-list">{items}</ul>;
	}
}

const mapStateToProps = (state) => {
	return {
		favorites: state.favorites
	};
};

export default connect(mapStateToProps, null)(FavoritesList);
