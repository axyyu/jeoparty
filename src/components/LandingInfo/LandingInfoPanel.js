import React from 'react';
import { Link } from 'react-router-dom';

import './LandingInfoPanel.scss';

class LandingInfoPanel extends React.Component {
	render() {
		return (
			<Link to={this.props.link} className="landing-info-panel">
				{this.props.icon}
				<h2>{this.props.text}</h2>
				<p>{this.props.desc}</p>
			</Link>
		);
	}
}

export default LandingInfoPanel;
