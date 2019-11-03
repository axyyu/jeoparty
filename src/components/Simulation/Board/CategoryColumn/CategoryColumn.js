import React from 'react';
import { connect } from 'react-redux';

import BoardHeader from '../BoardHeader';
import DifficultyColumn from '../DifficultyColumn';

class CategoryColumn extends React.Component {
	render() {
		const category = this.props.categories.filter((obj) => obj.value === this.props.id);
		const items = this.props.board[this.props.id].sort((a, b) => {
			return a.value - b.value;
		});
		return (
			<div className="category-column">
				<BoardHeader text={category[0].label} />
				<DifficultyColumn clues={items} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		board: state.simBoard,
		categories: state.simCategory
	};
};

export default connect(mapStateToProps, null)(CategoryColumn);
