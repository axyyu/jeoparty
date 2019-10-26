import React from 'react';

import Logo from '../../components/Logo';
import LandingInfo from '../../components/LandingInfo';
import './HomePage.scss';

class HomePage extends React.Component {
	render() {
		return (
			<div className="home-page">
				<Logo />
				<LandingInfo />
			</div>
		);
	}
}

export default HomePage;
