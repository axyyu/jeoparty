import React from 'react';
import { connect } from 'react-redux';

import './Board.scss';

class Board extends React.Component {
	render() {
		return <div className="board">board</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		board: state.simBoard
	};
};

export default connect(mapStateToProps, null)(Board);
