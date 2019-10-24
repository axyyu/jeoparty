/**
 * As jService had no way to retrieve categories by query on their API, 
 * I built a crawler to use the http://jservice.io/search page to obtain
 * categories using a search term.
 */

import axios from 'axios';
import cheerio from 'cheerio';

async function fetchResults(keyword) {
	const result = await axios.get(`http://jservice.io/search?query=${keyword}`);
	return cheerio.load(result.data);
}

function parseResults($) {
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

async function getCategoryByKeyword(keyword) {
	const page = await fetchResults(keyword);
	return parseResults(page);
}

export default getCategoryByKeyword;
