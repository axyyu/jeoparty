import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';

import './DateFilter.scss';

class DateFilter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			from: null,
			to: null
		};
	}
	handleDayClick(day) {
		const range = DateUtils.addDayToRange(day, this.state);
		this.setState(range);
	}
	render() {
		const { from, to } = this.state;
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

export default DateFilter;
