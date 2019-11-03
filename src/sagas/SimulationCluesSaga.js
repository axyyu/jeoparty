import { call, put, takeEvery, select } from 'redux-saga/effects';

import { cluesApi } from './API';
import { processResults } from '../utils/ClueResults';

export function* onSimulationClues() {
	yield takeEvery('SIMULATION_API_CLUES', fetchClues);
}

export function* fetchClues(action) {
	try {
		yield put({ type: 'SIMULATION_SET_CLUES_PENDING', payload: {} });

		const clues = yield call(cluesApi, action.payload);

		const data = processResults(clues.data.slice(0, action.payload.count));

		const state = yield select();
		const board = { ...state.simBoard };

		if (!(action.payload.category in board)) {
			board[action.payload.category] = [];
		}

		if (data.length > 0) {
			board[action.payload.category].push(data[0]);
		} else {
			board[action.payload.category].push(null);
		}

		yield put({ type: 'SIMULATION_SET_CLUES_SUCCESS', payload: { board } });

		if (checkBoard(board)) {
			yield put({ type: 'SIMULATION_START_SIMULATION' });
		}
	} catch (e) {
		yield put({ type: 'SIMULATION_SET_ERROR', payload: { error: e.message } });
	}
}

function checkBoard(board) {
	if (Object.keys(board).length !== 5) {
		return false;
	}
	for (let category in board) {
		if (board[category].length !== 5) {
			return false;
		}
	}
	return true;
}
