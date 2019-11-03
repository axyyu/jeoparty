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
		return <div className="simulation">{content}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		simulation: state.simulation,
		loader: state.simLoader
	};
};

export default connect(mapStateToProps, null)(Simulation);