import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { WinningStates } from '../constants/winning-states';
import { calculateWinner, getRandomChoice } from '../game-logic';


class GameResult extends PureComponent {

    render() {
        const { choice: player1Choice } = this.props;
        const player2Choice = getRandomChoice();
        const winner = calculateWinner(player1Choice, player2Choice);

        return (
            <div className="game-result">
                <div className="game-result__player">
                    <div className="game-result__player-heading">You</div>
                    <div className={cx('game-result__player-choice', player1Choice)}></div>
                    <div className={cx(
                        'game-result__player-winner',
                        {'winner': winner.cssClassName === WinningStates.PLAYER1.cssClassName},
                        {'draw': winner.cssClassName === WinningStates.DRAW.cssClassName},
                        {'loser': winner.cssClassName === WinningStates.PLAYER2.cssClassName}
                    )}></div>
                </div>
                <div className="game-result__vs">vs</div>
                <div className="game-result__player">
                    <div className="game-result__player-heading">Your opponent</div>
                    <div className={cx('game-result__player-choice', player2Choice)}></div>
                    <div className={cx(
                        'game-result__player-winner',
                        {'winner': winner.cssClassName === WinningStates.PLAYER2.cssClassName},
                        {'draw': winner.cssClassName === WinningStates.DRAW.cssClassName},
                        {'loser': winner.cssClassName === WinningStates.PLAYER1.cssClassName},
                    )}></div>
                </div>
                <div className="game-result__button" onClick={() => this.props.history.push('/')}>Play again</div>
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
