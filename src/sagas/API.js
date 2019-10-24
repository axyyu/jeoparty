import axios from 'axios';

import getCategoryByKeyword from '../utils/GetCategoryByKeyword';

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
	return await getCategoryByKeyword(keyword);
}

export async function cluesApi(payload) {
	payload = cleanPayload(payload);

	return await axios.get(`http://jservice.io/api/clues`, {
		params: payload
	});
}
