import { applyMiddleware, createStore } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';

const middleware = applyMiddleware(createSagaMiddleware(), thunk, logger);

export default createStore(reducers, middleware);
