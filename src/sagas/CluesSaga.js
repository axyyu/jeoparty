import { call, put, takeEvery } from 'redux-saga/effects';

import { cluesApi } from './API';
import { processResults } from '../utils/ClueResults';

export function* onClues() {
	yield takeEvery('SEARCH_API_CLUES', fetchClues);
}

export function* fetchClues(action) {
	try {
		yield put({ type: 'SEARCH_SET_CLUES_PENDING', payload: {} });

		const clues = yield call(cluesApi, action.payload);

		const data = processResults(clues.data).slice(0, action.payload.count);

		yield put({ type: 'SEARCH_SET_CLUES_SUCCESS', payload: { clues: data } });
	} catch (e) {
		yield put({ type: 'SEARCH_SET_ERROR', payload: { error: e.message } });
	}
}
