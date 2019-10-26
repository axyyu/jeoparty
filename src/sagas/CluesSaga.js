import { call, put, takeLatest } from 'redux-saga/effects';

import { cluesApi } from './API';

export function* onClues() {
	yield takeLatest('SEARCH_API_CLUES', fetchClues);
}

export function* fetchClues(action) {
	try {
		const clues = yield call(cluesApi, action.payload);
		yield put({ type: 'SEARCH_SET_CLUES_SUCCESS', payload: { clues: clues.data } });
	} catch (e) {
		yield put({ type: 'SEARCH_SET_ERROR', payload: { error: e.message } });
	}
}
