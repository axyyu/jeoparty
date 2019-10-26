import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

import './CategoryFilter.scss';
import { searchKeyword, setCategory } from './CategoryFilterActions';

class CategoryFilter extends React.Component {
	handleKeyword = (newValue) => {
		const inputValue = newValue.replace(/\W/g, '');
		this.props.searchKeyword({ keyword: inputValue });
	};
	handleChange = (selected) => {
		this.props.setCategory({ category: selected });
	};
	render() {
		const { keyword, categoryResults, category } = this.props;

		const options = categoryResults.map((obj) => {
			return { value: obj.id, label: obj.title };
		});

		return (
			<div className="filter category-filter">
				<label htmlFor="caregory">Category</label>
				<Select
					name="category"
					isMulti
					value={category}
					inputValue={keyword}
					options={options}
					onInputChange={this.handleKeyword.bind(this)}
					onChange={this.handleChange.bind(this)}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		keyword: state.keyword,
		category: state.category,
		categoryResults: state.categoryResults
	};
};

const mapDispatchToProps = {
	searchKeyword,
	setCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
