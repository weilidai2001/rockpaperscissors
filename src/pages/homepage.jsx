import React, { PureComponent } from 'react';

class Homepage extends PureComponent {

	render() {

		return (
			<div className="homepage">
				<div className="homepage__button" onClick={() => this.props.history.push('/rock-paper-scissors-choice')}>Human vs Computer</div>
				<div className="homepage__button">Computer vs Computer</div>
			</div>
		);
	}
}

export default Homepage;
