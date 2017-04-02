import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GameChoice } from '../constants/game-choices';


class GameResult extends PureComponent {

    render() {
        const { choice } = this.props;
        const choiceDisplayAs = GameChoice[choice].displayAs;

        return (
            <div>
                <div>You chose {choiceDisplayAs}</div>
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
