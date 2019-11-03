import React from 'react';

import './SearchResultList.scss';
import SearchResultListItem from './SearchResultListItem';

class SearchResultList extends React.Component {
	render() {
		const items =
			this.props.data.length > 0 ? (
				this.props.data.map((obj) => <SearchResultListItem key={obj.id} {...obj} />)
			) : (
				<p>Sorry, no results were found. {this.props.page !== 0 ? 'Try going back a page?' : null}</p>
			);

		return <ul className="search-results-list">{items}</ul>;
	}
}
export default SearchResultList;
