import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.scss';

class NavBar extends React.Component {
	render() {
		return (
			<nav className="nav-bar">
				<Link to="/">
					<h1>
						Jeo<span className="party-emphasis">party</span>
					</h1>
				</Link>
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
}

export default NavBar;
