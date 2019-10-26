import React from 'react';

import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';

class SearchPage extends React.Component {
	componentDidMount() {
		console.log(this.props);
	}
	render() {
		return (
			<div className="home-page">
				<h1>Home Page</h1>
				<SearchBar />
				<SearchResults />
			</div>
		);
	}
}

export default SearchPage;
