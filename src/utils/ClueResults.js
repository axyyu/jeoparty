import moment from 'moment';

export function parseDates(data) {
	return data.map((obj) => {
		const values = { ...obj };
		values.parsedDate = moment(values.airdate).format('ddd, MMM Do YYYY, h:mm:ss a');
		return values;
	});
}

export function filterResults(data) {
	return data.filter((obj) => {
		return obj.question !== '=' && obj.question !== '' && !obj.invalid_count;
	});
}

export function cleanResults(data) {
	return data.map((obj) => {
		const values = { ...obj };
		values.question = values.question.trim();
		return values;
	});
}

export function processResults(data) {
	return parseDates(filterResults(cleanResults(data)));
}
