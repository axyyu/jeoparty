import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import { categoryKeywordApi } from './API';

export function* onCategoryKeyword() {
	yield takeLatest('SEARCH_API_CATEGORY_KEYWORD', fetchCategoryKeyword);
}

export function* fetchCategoryKeyword(action) {
	try {
		const categories = yield call(categoryKeywordApi, action.payload.keyword);

		yield put({ type: 'SEARCH_SET_CATEGORY_KEYWORD_SUCCESS', payload: { categories } });
	} catch (e) {
		yield put({ type: 'SEARCH_SET_ERROR', payload: { error: e.message } });
	}
}
