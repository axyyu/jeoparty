import React from 'react';
import { connect } from 'react-redux';
import { Star } from 'react-feather';
import DOMPurify from 'dompurify';

import { toggleFavorite } from './SearchResultListItemActions';

class SearchResultListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reveal: false
		};
	}
	handleExpand() {
		this.setState({ reveal: !this.state.reveal });
	}
	handleStarClicked() {
		const payload = { ...this.props };
		delete payload.toggleFavorite;
		delete payload.favorites;
		this.props.toggleFavorite(payload);
	}
	render() {
		const answer = DOMPurify.sanitize(this.props.answer);
		const content = this.state.reveal ? (
			<div className="question-info">
				<span className="info-value">
					<b>Answer:</b> <span dangerouslySetInnerHTML={{ __html: answer }} />
				</span>
				<span className="info-value">
					<b>Air Date:</b> {this.props.parsedDate}
				</span>
			</div>
		) : null;

		const value = this.props.value ? `$${this.props.value}` : 'No Value';

		const starClass = this.props.id in this.props.favorites ? 'favorite filled' : 'favorite';

		return (
			<li id={this.props.id}>
				<div className="question">
					<h4 onClick={this.handleExpand.bind(this)}>{this.props.question}</h4>
					<div className="question-actions">
						<span className="difficulty">{value}</span>
						<span className="category">{this.props.category.title}</span>
						<span className="divider" />
						<span className={starClass} onClick={this.handleStarClicked.bind(this)}>
							<Star />
						</span>
					</div>
				</div>
				{content}
			</li>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		favorites: state.favorites
	};
};

const mapDispatchToProps = {
	toggleFavorite
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultListItem);
