import React from 'react';
import { connect } from 'react-redux';
import { X } from 'react-feather';

import { closeQuestion } from './QuestionActions';
import './Question.scss';

class Question extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			reveal: false
		};
	}
	handleCloseQuestion() {
		this.props.closeQuestion(this.props.question.id);
	}
	handleShowAnswer() {
		this.setState({ reveal: true });
	}
	render() {
		const question = this.props.question;

		const answer = this.state.reveal ? (
			<p>{question.answer}</p>
		) : (
			<button onClick={this.handleShowAnswer.bind(this)}>Reveal Answer</button>
		);

		return (
			<div className="question-container">
				<div className="question">
					<span className="hide-question" onClick={this.handleCloseQuestion.bind(this)}>
						<X />
					</span>
					<h4>{question.question}</h4>
					{answer}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		question: state.question
	};
};

const mapDispatchToProps = {
	closeQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
