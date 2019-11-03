import React from 'react';
import { connect } from 'react-redux';

import { showQuestion } from './BoardItemActions';
import './BoardItem.scss';

class BoardItem extends React.Component {
	handleShowQuestion() {
		if (this.props.question) {
			const payload = { ...this.props };
			delete payload.showQuestion;
			this.props.showQuestion(payload);
		}
	}
	render() {
		const answered = this.props.answered ? 'answered' : '';
		const exists = this.props.question ? 'exists' : '';

		const value = this.props.question ? <span>${this.props.value}</span> : <span>N/A</span>;
		const content = this.props.answered ? null : value;

		return (
			<div className={`board-box board-item ${answered} ${exists}`} onClick={this.handleShowQuestion.bind(this)}>
				{content}
			</div>
		);
	}
}

const mapDispatchToProps = {
	showQuestion
};

export default connect(null, mapDispatchToProps)(BoardItem);
