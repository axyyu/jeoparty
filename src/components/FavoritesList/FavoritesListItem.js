import React from 'react';
import { X } from 'react-feather';
import moment from 'moment';

class FavoritesListItem extends React.Component {
	render() {
		const value = this.props.value ? `$${this.props.value}` : 'No Value';
		const date = moment(this.props.airdate).format('l');

		return (
			<li id={this.props.id}>
				<div className="favorite-heading">
					<span className="delete-favorite">
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

export default FavoritesListItem;
