import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import './styles/styles.scss';
import MainRouter from './routes';
import store from './store';

ReactDOM.render(
	<Provider store={store}>
		<MainRouter />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
