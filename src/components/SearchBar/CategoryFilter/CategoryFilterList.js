import React from 'react';

class CategoryFilterListItem extends React.Component {
	render() {
		return <li>{this.props.title || ''}</li>;
	}
}

class CategoryFilterList extends React.Component {
	render() {
		const items = this.props.data.map((obj) => <CategoryFilterListItem key={obj.id} title={obj.title} />);
		return <ul className="category-filter-list">{items}</ul>;
	}
}

export default CategoryFilterList;
