import React from 'react';
import { connect } from 'react-redux';

import SearchResultsList from './SearchResultsList';
import './SearchResults.scss';
// import { searchClues } from './SearchResultsActions';

class SearchResults extends React.Component {
	render() {
		const { clueResults } = this.props;
		return (
			<div className="search-bar">
				<SearchResultsList data={clueResults} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		clueResults: state.clueResults
	};
};

export default connect(mapStateToProps, null)(SearchResults);
