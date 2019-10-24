import React from 'react';
import DateFilter from './DateFilter';
import CategoryFilter from './CategoryFilter';

function SearchBar() {
	return (
		<div className="search-bar">
			<h1>Search Bar</h1>
			<DateFilter />
			<CategoryFilter />
		</div>
	);
}

export default SearchBar;
