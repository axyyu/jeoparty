import { all } from 'redux-saga/effects';

import { onCategoryKeyword } from './CategoryKeywordSaga';

export default function* rootSaga() {
	yield all([ onCategoryKeyword() ]);
}
