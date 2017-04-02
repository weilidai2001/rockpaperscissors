import React, { PureComponent } from 'react';
import Choice from './choice';
import { GameChoice } from '../constants/game-choices';

class RockPaperScissorsChoice extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const choices = [
            {id: GameChoice.CHOICE_ROCK, displayAs: 'Rock'},
            {id: GameChoice.CHOICE_PAPER, displayAs: 'Paper'},
            {id: GameChoice.CHOICE_SCISSORS, displayAs: 'Scissors'}
        ];

        return (
            <Choice choices={choices} history={this.props.history} />
        );
    }
}

export default RockPaperScissorsChoice;
