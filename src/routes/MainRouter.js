import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import SearchPage from './SearchPage';
import FavoritesPage from './FavoritesPage';
import NavBar from '../components/NavBar';

function MainRouter() {
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
		</Router>
	);
}

export default MainRouter;
