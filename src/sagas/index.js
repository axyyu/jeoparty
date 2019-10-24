import { all } from 'redux-saga/effects';

import { onCategoryKeyword } from './CategoryKeywordSaga';
import { onClues } from './CluesSaga';

export default function* rootSaga() {
	yield all([ onCategoryKeyword(), onClues() ]);
}
