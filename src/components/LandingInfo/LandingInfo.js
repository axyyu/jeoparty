import React from 'react';
import { Search, Star, Grid } from 'react-feather';

import LandingInfoPanel from './LandingInfoPanel';
import './LandingInfo.scss';

const panels = [
	{
		icon: <Search />,
		text: 'Search',
		desc: 'Browse through a large collection of clues',
		link: '/search'
	},
	{
		icon: <Star />,
		text: 'Favorites',
		desc: 'Star your favorite clues and answers',
		link: '/favorites'
	},
	{
		icon: <Grid />,
		text: 'Simulation',
		desc: 'Play Jeopardy with our interactive game board',
		link: '/simulation'
	}
];

class LandingInfo extends React.Component {
	render() {
		const content = panels.map((obj, index) => <LandingInfoPanel key={index} {...obj} />);
		return (
			<div className="landing-info">
				<div className="landing-background" />
				{content}
			</div>
		);
	}
}

export default LandingInfo;
