import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { GameChoice } from '../constants/game-choices';

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
            <div className="choice">
                <div className="choice__button" onClick={() => this.makeChoice(GameChoice.CHOICE_ROCK)}>Rock</div>
                <div className="choice__button" onClick={() => this.makeChoice(GameChoice.CHOICE_PAPER)}>Paper</div>
                <div className="choice__button" onClick={() => this.makeChoice(GameChoice.CHOICE_SCISSORS)}>Scissors</div>
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
