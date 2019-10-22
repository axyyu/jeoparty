import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './assets/sass/styles.scss';
import MainRouter from './routes';

ReactDOM.render(<MainRouter />, document.getElementById('root'));

serviceWorker.unregister();
