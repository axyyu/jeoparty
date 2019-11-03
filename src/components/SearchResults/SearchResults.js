import React from 'react';
import { connect } from 'react-redux';

import SearchResultsList from './SearchResultList';
import SearchPages from './SearchPages';
import Loader from '../Loader';
import './SearchResults.scss';

class SearchResults extends React.Component {
	render() {
		const { clueResults, searched, loader, offset } = this.props;

		const content = loader ? (
			<Loader />
		) : searched ? (
			<div className="search-results-content">
				<SearchResultsList data={clueResults} page={offset} />
				<SearchPages />
			</div>
		) : (
			<p>Click the search button on the left to search for Jeopardy questions!</p>
		);

		const error = this.props.error ? <p>{this.props.error}</p> : null;

		return (
			<div className="search-results">
				<h2>Results</h2>
				{error}
				{content}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		clueResults: state.clueResults,
		searched: state.searched,
		loader: state.loader,
		offset: state.clueOffset,
		error: state.error
	};
};

export default connect(mapStateToProps, null)(SearchResults);
