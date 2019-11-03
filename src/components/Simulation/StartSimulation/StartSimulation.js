import React from 'react';
import { connect } from 'react-redux';

import CategoryFilter from './CategoryFilter';
import DifficultyFilter from './DifficultyFilter';
import './StartSimulation.scss';
import { getPopularCategory, resetSimulation, setupSimulation } from './StartSimulationActions';

class StartSimulation extends React.Component {
	componentDidMount() {
		this.props.resetSimulation();
		this.props.getPopularCategory();
	}
	handleStart() {
		this.props.setupSimulation();
	}

	render() {
		const disabled = !(this.props.difficulty.length === 5 && this.props.category.length === 5);
		return (
			<div className="start-simulation">
				<h2>Setup Simulation</h2>
				<CategoryFilter />
				<DifficultyFilter />
				<button onClick={this.handleStart.bind(this)} disabled={disabled}>
					Search
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		category: state.simCategory,
		difficulty: state.simDifficulty
	};
};

const mapDispatchToProps = {
	getPopularCategory,
	resetSimulation,
	setupSimulation
};

export default connect(mapStateToProps, mapDispatchToProps)(StartSimulation);
