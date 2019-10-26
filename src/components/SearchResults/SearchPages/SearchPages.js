import React from 'react';
import { connect } from 'react-redux';

import { searchNextClues } from './SearchPagesActions';
import './SearchPages.scss';

class SearchPages extends React.Component {
	handlePrevClues() {
		if (this.props.clueOffset > 0) {
			this.props.searchNextClues({ offset: this.props.clueOffset - 1 });
		}
	}
	handleNextClues() {
		if (this.props.resultsCount > 90) {
			this.props.searchNextClues({ offset: this.props.clueOffset + 1 });
		}
	}

	render() {
		return (
			<div className="search-pages">
				<button onClick={this.handlePrevClues.bind(this)}>Load Previous</button>
				<button onClick={this.handleNextClues.bind(this)}>Load Next</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		clueOffset: state.clueOffset,
		resultsCount: state.clueResults.length
	};
};

const mapDispatchToProps = {
	searchNextClues
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPages);
