import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GameChoice } from '../constants/game-choices';
import { calculateWinner, getRandomChoice } from '../game-logic';


class GameResult extends PureComponent {

    render() {
        const { choice: player1Choice } = this.props;
        const { slug: player1ChoiceSlug, displayAs: player1AsNaturalText } = GameChoice[player1Choice];
        const opponentChoiceSlug = getRandomChoice();
        const winner = calculateWinner(player1ChoiceSlug, opponentChoiceSlug);

        return (
            <div>
                <div>You (Player 1) chose { player1AsNaturalText } and your opponent (Player 2) chose {GameChoice[opponentChoiceSlug].displayAs}</div>
                <div>{ winner.message }</div>
                <Link to="/">Play again</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state.gameLogic
    };
}

export default connect(mapStateToProps)(GameResult);
