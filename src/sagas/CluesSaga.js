import { call, put, takeLatest } from 'redux-saga/effects';

import { cluesApi } from './API';
import { parseDates } from '../utils/CrawlWebpage';

export function* onClues() {
	yield takeLatest('SEARCH_API_CLUES', fetchClues);
}

export function* fetchClues(action) {
	try {
		yield put({ type: 'SEARCH_SET_CLUES_PENDING', payload: {} });

		const clues = yield call(cluesApi, action.payload);
		const data = parseDates(clues.data);

		yield put({ type: 'SEARCH_SET_CLUES_SUCCESS', payload: { clues: data } });
	} catch (e) {
		yield put({ type: 'SEARCH_SET_ERROR', payload: { error: e.message } });
	}
}
