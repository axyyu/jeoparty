import { call, put, takeLatest } from 'redux-saga/effects';

import { categoryKeywordApi, popularCategoryApi } from './API';

export function* onCategoryKeyword() {
	yield takeLatest('SEARCH_API_CATEGORY_KEYWORD', fetchCategoryKeyword);
}

export function* fetchCategoryKeyword(action) {
	try {
		let categories = [];
		if (action.payload.keyword === '') {
			categories = yield call(popularCategoryApi);
		} else {
			categories = yield call(categoryKeywordApi, action.payload.keyword);
		}

		yield put({ type: 'SEARCH_SET_CATEGORY_KEYWORD_SUCCESS', payload: { categories } });
	} catch (e) {
		yield put({ type: 'SEARCH_SET_ERROR', payload: { error: e.message } });
	}
}
