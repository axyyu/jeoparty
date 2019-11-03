import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';

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

		const textClass = category.length === 5 ? 'success' : 'error';

		return (
			<div className="filter category-filter">
				<p>
					Please choose 5 different categories.
					<span className={`counter ${textClass}`}>{`${category.length}/5 selected.`}</span>
				</p>
				<label htmlFor="category">Category</label>
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
		keyword: state.simKeyword,
		category: state.simCategory,
		categoryResults: state.simCategoryResults
	};
};

const mapDispatchToProps = {
	searchKeyword,
	setCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
