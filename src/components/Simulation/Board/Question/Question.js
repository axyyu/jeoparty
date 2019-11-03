import React from 'react';
import { connect } from 'react-redux';
import { X } from 'react-feather';
import DOMPurify from 'dompurify';

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

		const questionText = DOMPurify.sanitize(question.question);
		const answerText = DOMPurify.sanitize(question.answer);

		const answer = this.state.reveal ? (
			<p dangerouslySetInnerHTML={{ __html: answerText }} />
		) : (
			<button onClick={this.handleShowAnswer.bind(this)}>Reveal Answer</button>
		);

		return (
			<div className="question-container">
				<div className="question">
					<span className="hide-question" onClick={this.handleCloseQuestion.bind(this)}>
						<X />
					</span>
					<h4 dangerouslySetInnerHTML={{ __html: questionText }} />
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
