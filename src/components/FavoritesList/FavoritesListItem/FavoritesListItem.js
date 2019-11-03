import React from 'react';
import { X } from 'react-feather';
import moment from 'moment';
import { connect } from 'react-redux';
import DOMPurify from 'dompurify';

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

		const answer = DOMPurify.sanitize(this.props.answer);
		const question = DOMPurify.sanitize(this.props.question);

		return (
			<li id={this.props.id}>
				<div className="favorite-heading">
					<span className="delete-favorite" onClick={this.handleXClicked.bind(this)}>
						<X />
					</span>
					<h4 dangerouslySetInnerHTML={{ __html: question }} />
				</div>
				<p dangerouslySetInnerHTML={{ __html: answer }} />

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
