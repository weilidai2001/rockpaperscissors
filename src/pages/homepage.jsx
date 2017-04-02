import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Homepage extends PureComponent {

	render() {

		return (
			<div>
				<Link to="/rock-paper-scissors-choice">Human vs Computer</Link>
				<Link to="/game-result">Computer vs Computer</Link>
			</div>
		);
	}
}

export default Homepage;
