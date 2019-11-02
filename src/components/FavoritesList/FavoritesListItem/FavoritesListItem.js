import React from 'react';
import { X } from 'react-feather';
import moment from 'moment';
import { connect } from 'react-redux';

import { removeFavorite } from './FavoritesListItemActions';

class FavoritesListItem extends React.Component {
	handleXClicked() {
		const payload = { ...this.props };
		delete payload.removeFavorite;
		this.props.removeFavorite(payload);
	}
	render() {
		const value = this.props.value ? `$${this.props.value}` : 'No Value';
		const date = moment(this.props.airdate).format('l');

		return (
			<li id={this.props.id}>
				<div className="favorite-heading">
					<span className="delete-favorite" onClick={this.handleXClicked.bind(this)}>
						<X />
					</span>
					<h4>{this.props.question}</h4>
				</div>
				<p>{this.props.answer}</p>

				<div className="favorite-info">
					<span className="difficulty">{value}</span>
					<span className="category">{this.props.category.title}</span>
					<span className="date">{date}</span>
				</div>
			</li>
		);
	}
}

const mapDispatchToProps = {
	removeFavorite
};

export default connect(null, mapDispatchToProps)(FavoritesListItem);
