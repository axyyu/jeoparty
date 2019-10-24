import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import './DifficultyFilter.scss';
import { setDifficulty } from './DifficultyFilterActions';

var options = Array.from({ length: 10 }, (_, i) => (i + 1) * 100).map((obj) => {
	return { value: obj, label: obj };
});

class DifficultyFilter extends React.Component {
	handleChange = (selected) => {
		this.props.setDifficulty({ difficulty: selected });
	};
	render() {
		const { difficulty } = this.props;

		return (
			<div className="difficulty-filter">
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
