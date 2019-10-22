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
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route path="/search">
					<SearchPage />
				</Route>
				<Route path="/favorites">
					<FavoritesPage />
				</Route>
			</Switch>
		</Router>
	);
}

export default MainRouter;
