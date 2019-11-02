import React from 'react';

import './SearchResultList.scss';
import SearchResultListItem from './SearchResultListItem';

class SearchResultList extends React.Component {
	render() {
		const items =
			this.props.data.length > 0 ? (
				this.props.data.map((obj) => <SearchResultListItem key={obj.id} {...obj} />)
			) : (
				<p>Sorry, no results were found. Try going back a page?</p>
			);

		return <ul className="search-results-list">{items}</ul>;
	}
}
export default SearchResultList;
