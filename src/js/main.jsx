require('../css/main.scss');
import React, {PropTypes, Component} from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import rootReducer from '../reducers'
import routes from './routes';

const store = createStore(rootReducer);

render(
	<Provider store={store}>
		{routes}
	</Provider>,
	document.getElementById('root')
);
