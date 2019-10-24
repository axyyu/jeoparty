import React from 'react';
import DateFilter from './DateFilter';
import CategoryFilter from './CategoryFilter';
import DifficultyFilter from './DifficultyFilter';

function SearchBar() {
	return (
		<div className="search-bar">
			<h1>Search Bar</h1>
			<DateFilter />
			<CategoryFilter />
			<DifficultyFilter />
		</div>
	);
}

export default SearchBar;
