import { all } from 'redux-saga/effects';

import { onCategoryKeyword } from './CategoryKeywordSaga';
import { onClues } from './CluesSaga';
import { onSimulationCategoryKeyword } from './SimulationCategorySaga';
import { onSimulationClues } from './SimulationCluesSaga';

export default function* rootSaga() {
	yield all([ onCategoryKeyword(), onClues(), onSimulationCategoryKeyword(), onSimulationClues() ]);
}
