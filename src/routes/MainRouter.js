import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import SearchPage from './SearchPage';
import FavoritesPage from './FavoritesPage';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { initializeApp } from './MainRouterActions';

class MainRouter extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
		return (
			<Router>
				<NavBar />
				<section className="page-content">
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/search" component={SearchPage} />
						<Route path="/favorites" component={FavoritesPage} />
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
