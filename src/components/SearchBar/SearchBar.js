import React from 'react';
import { connect } from 'react-redux';

import DateFilter from './DateFilter';
import CategoryFilter from './CategoryFilter';
import DifficultyFilter from './DifficultyFilter';
import './SearchBar.scss';
import { searchClues } from './SearchBarActions';

class SearchBar extends React.Component {
	handleSearch() {
		this.props.searchClues();
	}
	render() {
		return (
			<div className="search-bar">
				<h1>Search Bar</h1>
				<DateFilter />
				<CategoryFilter />
				<DifficultyFilter />
				<button onClick={this.handleSearch.bind(this)}>Search</button>
			</div>
		);
	}
}

const mapDispatchToProps = {
	searchClues
};

export default connect(null, mapDispatchToProps)(SearchBar);
