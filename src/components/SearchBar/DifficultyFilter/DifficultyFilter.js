import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import './DifficultyFilter.scss';
import { setDifficulty } from './DifficultyFilterActions';

var options = [ 100, 200, 300, 400, 500, 600, 800, 1000 ].map((obj) => {
	return { value: obj, label: obj };
});

class DifficultyFilter extends React.Component {
	handleChange = (selected) => {
		this.props.setDifficulty({ difficulty: selected });
	};
	render() {
		const { difficulty } = this.props;

		return (
			<div className="filter difficulty-filter">
				<label htmlFor="difficulty">Difficulty/Value</label>
				<Select
					name="difficulty"
					isMulti
					value={difficulty}
					options={options}
					onChange={this.handleChange.bind(this)}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		difficulty: state.difficulty
	};
};

const mapDispatchToProps = {
	setDifficulty
};

export default connect(mapStateToProps, mapDispatchToProps)(DifficultyFilter);
