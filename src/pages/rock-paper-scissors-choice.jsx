import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class RockPaperScissorsChoice extends PureComponent {
    constructor(props, context) {
        super(props, context);
        this.makeChoice = this.makeChoice.bind(this)
    }

    makeChoice(choiceType) {
        this.props.onChoiceClick(choiceType);
        this.props.history.push('/game-result');
    }

    render() {

        return (
            <div>
                <button onClick={() => this.makeChoice('CHOICE_ROCK')}>Rock</button>
                <button onClick={() => this.makeChoice('CHOICE_PAPER')}>Paper</button>
                <button onClick={() => this.makeChoice('CHOICE_SCISSORS')}>Scissors</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChoiceClick: (type) => dispatch({type})
    };
}

export default connect(null, mapDispatchToProps)(RockPaperScissorsChoice);
