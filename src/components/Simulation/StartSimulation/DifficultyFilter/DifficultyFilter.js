import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

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

		const textClass = difficulty.length === 5 ? 'success' : 'error';

		return (
			<div className="filter difficulty-filter">
				<p>
					Please choose 5 different difficulties.
					<span className={`counter ${textClass}`}>{`${difficulty.length}/5 selected.`}</span>
				</p>
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
		difficulty: state.simDifficulty
	};
};

const mapDispatchToProps = {
	setDifficulty
};

export default connect(mapStateToProps, mapDispatchToProps)(DifficultyFilter);
