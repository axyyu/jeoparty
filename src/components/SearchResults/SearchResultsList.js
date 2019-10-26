import React from 'react';

class SearchResultsListItem extends React.Component {
	render() {
		return <li>{this.props.id}</li>;
	}
}

class SearchResultsList extends React.Component {
	render() {
		const items = this.props.data.map((obj) => <SearchResultsListItem key={obj.id} {...obj} />);
		return <ul className="search-results-list">{items}</ul>;
	}
}
export default SearchResultsList;
