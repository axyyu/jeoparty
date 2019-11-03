import React from 'react';
import { connect } from 'react-redux';

import SearchResultsList from './SearchResultList';
import SearchPages from './SearchPages';
import Loader from '../Loader';
import './SearchResults.scss';

class SearchResults extends React.Component {
	render() {
		const { clueResults, searched, loader } = this.props;

		const content = loader ? (
			<Loader />
		) : searched ? (
			<div className="search-results-content">
				<SearchResultsList data={clueResults} />
				<SearchPages />
			</div>
		) : (
			<p>Click the search button on the left to search for Jeopardy questions!</p>
		);

		return (
			<div className="search-results">
				<h2>Results</h2>
				{content}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		clueResults: state.clueResults,
		searched: state.searched,
		loader: state.loader
	};
};

export default connect(mapStateToProps, null)(SearchResults);
