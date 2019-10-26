import React from 'react';
import { connect } from 'react-redux';

import DateFilter from './DateFilter';
import CategoryFilter from './CategoryFilter';
import DifficultyFilter from './DifficultyFilter';
import './SearchBar.scss';
import { searchClues, getPopularCategory } from './SearchBarActions';

class SearchBar extends React.Component {
	handleSearch() {
		this.props.searchClues();
	}
	componentDidMount() {
		this.props.getPopularCategory();
	}
	render() {
		return (
			<div className="search-bar">
				<h2>Filters</h2>
				<CategoryFilter />
				<DifficultyFilter />
				<DateFilter />
				<button onClick={this.handleSearch.bind(this)}>Search</button>
			</div>
		);
	}
}

const mapDispatchToProps = {
	searchClues,
	getPopularCategory
};

export default connect(null, mapDispatchToProps)(SearchBar);
