import React from 'react';

import './Logo.scss';

class Logo extends React.Component {
	render() {
		return (
			<div className="logo">
				<h1 className="logo-text">
					Jeo<span className="party-emphasis">party</span>
				</h1>
				<p>A search engine for Jeopardy clues and answers</p>
			</div>
		);
	}
}

export default Logo;
