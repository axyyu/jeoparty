import React from 'react';

import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';
import './SearchPage.scss';

class SearchPage extends React.Component {
	componentDidMount() {
		console.log(this.props);
	}
	render() {
		return (
			<div className="search-page">
				<SearchBar />
				<SearchResults />
			</div>
		);
	}
}

export default SearchPage;
