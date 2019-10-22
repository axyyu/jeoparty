import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import { connect } from 'react-redux';

import './DateFilter.scss';
import { setDateRange } from './DateFilterActions';

class DateFilter extends React.Component {
	handleDayClick(day) {
		const range = DateUtils.addDayToRange(day, this.props);
		this.props.setDateRange(range);
	}
	render() {
		const { from, to } = this.props;
		const modifiers = { start: from, end: to };

		return (
			<div className="date-filter">
				<DayPicker
					className="Selectable"
					selectedDays={[ from, { from, to } ]}
					modifiers={modifiers}
					onDayClick={this.handleDayClick.bind(this)}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		from: state.fromDate,
		to: state.toDate
	};
};

const mapDispatchToProps = {
	setDateRange
};

export default connect(mapStateToProps, mapDispatchToProps)(DateFilter);
