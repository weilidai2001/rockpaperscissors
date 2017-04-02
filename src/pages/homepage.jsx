import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getRandomChoice } from '../game-logic';

class Homepage extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.onComputerVsComputerClick = this.onComputerVsComputerClick.bind(this)
    }

    onComputerVsComputerClick() {
    	const randomChoice = getRandomChoice();
        this.props.onChoiceClick(randomChoice);
        this.props.history.push('/game-result');
    }

	render() {

		return (
			<div className="homepage">
				<h1 className="homepage__heading">Rock, Paper, Scissors</h1>
				<div className="homepage__button" onClick={() => this.props.history.push('/rock-paper-scissors-choice')}>Human vs Computer</div>
				<div className="homepage__button" onClick={this.onComputerVsComputerClick}>Computer vs Computer</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
    return {
        onChoiceClick: (type) => dispatch({type})
    };
}

export default connect(null, mapDispatchToProps)(Homepage);
