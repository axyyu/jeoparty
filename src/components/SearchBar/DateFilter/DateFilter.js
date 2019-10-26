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
	handleClear() {
		this.props.setDateRange({ from: null, to: null });
	}
	render() {
		const { from, to } = this.props;
		const modifiers = { start: from, end: to };
		const disabled = {
			after: new Date()
		};

		return (
			<div className="filter date-filter">
				<label htmlFor="date">Timeframe Aired</label>
				<span className="clear-filter" onClick={this.handleClear.bind(this)}>
					Clear Timeframe
				</span>
				<DayPicker
					className="Selectable"
					selectedDays={[ from, { from, to } ]}
					modifiers={modifiers}
					disabledDays={disabled}
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
