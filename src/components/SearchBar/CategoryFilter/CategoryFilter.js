import React from 'react';
import { connect } from 'react-redux';

import './CategoryFilter.scss';
import { searchKeyword } from './CategoryFilterActions';
import CategoryFilterList from './CategoryFilterList';

class CategoryFilter extends React.Component {
	handleKeyword(event) {
		this.props.searchKeyword({ keyword: event.target.value });
	}
	render() {
		const { keyword, categoryResults } = this.props;

		return (
			<div className="category-filter">
				<input type="text" value={keyword || ''} onChange={this.handleKeyword.bind(this)} />
				<CategoryFilterList data={categoryResults} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		keyword: state.keyword,
		categoryResults: state.categoryResults
	};
};

const mapDispatchToProps = {
	searchKeyword
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
