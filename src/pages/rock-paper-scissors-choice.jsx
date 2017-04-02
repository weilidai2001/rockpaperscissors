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
            <div>
                <button onClick={() => this.makeChoice(GameChoice.CHOICE_ROCK.slug)}>{GameChoice.CHOICE_ROCK.displayAs}</button>
                <button onClick={() => this.makeChoice(GameChoice.CHOICE_PAPER.slug)}>{GameChoice.CHOICE_PAPER.displayAs}</button>
                <button onClick={() => this.makeChoice(GameChoice.CHOICE_SCISSORS.slug)}>{GameChoice.CHOICE_SCISSORS.displayAs}</button>
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
