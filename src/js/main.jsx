require('../css/main.scss');

import React, {PropTypes, Component} from 'react';
import {render} from 'react-dom';
import routes from './routes';

render(
	<div>
		{routes}
	</div>,
	document.getElementById('root')
);
