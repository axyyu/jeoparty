import { call, put, takeLatest } from 'redux-saga/effects';

import { categoryKeywordApi, popularCategoryApi } from './API';

export function* onSimulationCategoryKeyword() {
	yield takeLatest('SIMULATION_API_CATEGORY_KEYWORD', fetchSimulationCategoryKeyword);
}

export function* fetchSimulationCategoryKeyword(action) {
	try {
		let categories = [];
		if (action.payload.keyword === '') {
			categories = yield call(popularCategoryApi);
		} else {
			categories = yield call(categoryKeywordApi, action.payload.keyword);
		}

		yield put({ type: 'SIMULATION_SET_CATEGORY_KEYWORD_SUCCESS', payload: { categories } });
	} catch (e) {
		yield put({ type: 'SIMULATION_SET_ERROR', payload: { error: e.message } });
	}
}
