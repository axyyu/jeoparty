import React from 'react';
import { connect } from 'react-redux';

import Loader from '../Loader';
import StartSimulation from './StartSimulation';
import Board from './Board';
import './Simulation.scss';

class Simulation extends React.Component {
	render() {
		const screen = this.props.simulation ? <Board /> : <StartSimulation />;
		const content = this.props.loader ? <Loader /> : screen;
		const error = this.props.error ? <p>{this.props.error}</p> : null;
		return (
			<div className="simulation">
				<div className="mobile-block">
					<p>Sorry, the simulation is currently not supported on mobile devices.</p>
				</div>
				{error}
				{content}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		simulation: state.simulation,
		loader: state.simLoader,
		error: state.simError
	};
};

export default connect(mapStateToProps, null)(Simulation);
