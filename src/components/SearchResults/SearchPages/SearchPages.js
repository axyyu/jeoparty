import React from 'react';
import { connect } from 'react-redux';
import { ArrowRight, ArrowLeft } from 'react-feather';

import { searchNextClues } from './SearchPagesActions';
import './SearchPages.scss';

class SearchPages extends React.Component {
	handlePrevClues() {
		if (this.props.clueOffset > 0) {
			this.props.searchNextClues({ offset: this.props.clueOffset - 1 });
		}
	}
	handleNextClues() {
		if (this.props.resultsCount > 0) {
			this.props.searchNextClues({ offset: this.props.clueOffset + 1 });
		}
	}

	render() {
		const arrowLeft = this.props.clueOffset > 0 ? 'arrow' : 'arrow disabled';
		const arrowRight = this.props.resultsCount > 0 ? 'arrow' : 'arrow disabled';

		return (
			<div className="search-pages">
				<span className={arrowLeft} onClick={this.handlePrevClues.bind(this)}>
					<ArrowLeft />
				</span>
				<span className="page-number">{this.props.clueOffset + 1}</span>
				<span className={arrowRight} onClick={this.handleNextClues.bind(this)}>
					<ArrowRight />
				</span>
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
