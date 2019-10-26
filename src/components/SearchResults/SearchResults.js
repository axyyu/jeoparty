import React from 'react';
import { connect } from 'react-redux';

import SearchResultsList from './SearchResultList';
import SearchPages from './SearchPages';
import SearchLoader from './SearchLoader';
import './SearchResults.scss';

class SearchResults extends React.Component {
	render() {
		const { clueResults, searched, loader } = this.props;

		const content = loader ? (
			<SearchLoader />
		) : searched ? (
			<div className="search-results-content">
				<SearchResultsList data={clueResults} />
				<SearchPages />
			</div>
		) : null;

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
