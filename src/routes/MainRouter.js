import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import SearchPage from './SearchPage';
import FavoritesPage from './FavoritesPage';
import SimulationPage from './SimulationPage';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { initializeApp } from './MainRouterActions';

class MainRouter extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<p>{process.env.PUBLIC_URL}</p>
				<NavBar />
				<section className="page-content">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/search" component={SearchPage} />
						<Route path="/favorites" component={FavoritesPage} />
						<Route path="/simulation" component={SimulationPage} />
					</Switch>
				</section>
				<Footer />
			</Router>
		);
	}
}

const mapDispatchToProps = {
	initializeApp
};

export default connect(null, mapDispatchToProps)(MainRouter);
