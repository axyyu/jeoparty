import React from 'react';
import { connect } from 'react-redux';

import './Board.scss';
import CategoryColumn from './CategoryColumn';
import Question from './Question';

class Board extends React.Component {
	render() {
		const categories = Object.keys(this.props.board).map((obj) => <CategoryColumn key={obj} id={obj} />);
		const question = this.props.question ? <Question /> : null;
		return (
			<div className="board">
				{question}
				{categories}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		board: state.simBoard,
		question: state.question
	};
};

export default connect(mapStateToProps, null)(Board);
