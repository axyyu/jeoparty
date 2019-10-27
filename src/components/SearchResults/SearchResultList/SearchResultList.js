import React from 'react';
import { Star } from 'react-feather';
import DOMPurify from 'dompurify';

import './SearchResultList.scss';

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
		const star = this.props.favorite ? (
			<Star />
		) : (
			<span className="filled">
				<Star />
			</span>
		);

		return (
			<li id={this.props.id}>
				<div className="question">
					<h4 onClick={this.handleExpand.bind(this)}>{this.props.question}</h4>
					<div className="question-actions">
						<span className="difficulty">{value}</span>
						<span className="category">{this.props.category.title}</span>
						<span className="divider" />
						<span className="favorite">{star}</span>
					</div>
				</div>
				{content}
			</li>
		);
	}
}

class SearchResultList extends React.Component {
	render() {
		const items =
			this.props.data.length > 0 ? (
				this.props.data.map((obj) => <SearchResultListItem key={obj.id} {...obj} />)
			) : (
				<p>Sorry, no results were found. Try going back a page?</p>
			);

		return <ul className="search-results-list">{items}</ul>;
	}
}
export default SearchResultList;
