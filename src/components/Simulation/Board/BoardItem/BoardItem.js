import React from 'react';
import { connect } from 'react-redux';

import { showQuestion } from './BoardItemActions';
import './BoardItem.scss';

class BoardItem extends React.Component {
	handleShowQuestion() {
		const payload = { ...this.props };
		delete payload.showQuestion;
		console.log(payload);
		this.props.showQuestion(payload);
	}
	render() {
		const answered = this.props.answered ? 'answered' : '';
		const content = this.props.answered ? null : <span>${this.props.value}</span>;
		return (
			<div className={`board-box board-item ${answered}`} onClick={this.handleShowQuestion.bind(this)}>
				{content}
			</div>
		);
	}
}

const mapDispatchToProps = {
	showQuestion
};

export default connect(null, mapDispatchToProps)(BoardItem);
