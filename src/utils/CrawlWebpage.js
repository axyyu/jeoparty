/**
 * As jService had no way to retrieve categories by query on their API, 
 * I built a crawler to use the http://jservice.io/search page to obtain
 * categories using a search term.
 */

import axios from 'axios';
import cheerio from 'cheerio';
import moment from 'moment';

export async function fetchResults(url) {
	const result = await axios.get(url);
	return cheerio.load(result.data);
}

export function parseCategoryResults($) {
	const rows = $('tbody').find('tr').find('td');

	const categories = [];

	rows.toArray().forEach((obj, index) => {
		if (index % 2 === 0) {
			const link = obj.children[0].attribs.href;
			const start = link.lastIndexOf('/') + 1;

			categories.push({
				id: link.substring(start),
				title: obj.children[0].children[0].data
			});
		} else {
			const index = categories.length - 1;
			const count = obj.children[0].data;
			categories[index]['clues_count'] = count;
		}
	});
	return categories;
}

export function parseDates(data) {
	return data.map((obj) => {
		const values = { ...obj };
		values.parsedDate = moment(values.airdate).format('ddd, MMM Do YYYY, h:mm:ss a');
		return values;
	});
}
