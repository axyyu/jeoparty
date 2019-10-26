import axios from 'axios';

import { fetchResults, parseCategoryResults } from '../utils/CrawlWebpage';

function cleanPayload(payload) {
	const copy = { ...payload };
	for (var key in payload) {
		if (payload[key] === null) {
			delete copy[key];
		}
	}
	return copy;
}

export async function categoryKeywordApi(keyword) {
	const page = await fetchResults(`http://jservice.io/search?query=${keyword}`);
	return parseCategoryResults(page);
}

export async function popularCategoryApi() {
	const page = await fetchResults(`http://jservice.io/popular`);
	return parseCategoryResults(page);
}

export async function cluesApi(payload) {
	payload = cleanPayload(payload);

	return await axios.get(`http://jservice.io/api/clues`, {
		params: payload
	});
}
