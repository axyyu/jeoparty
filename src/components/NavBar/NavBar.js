import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.scss';

function NavBar() {
	return (
		<nav className="nav-bar">
			<h1>Nav Bar</h1>
			<ul>
				<li>
					<Link to="/search">Search</Link>
				</li>
				<li>
					<Link to="/favorites">Favorites</Link>
				</li>
				<li>
					<Link to="/simulation">Simulation</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
