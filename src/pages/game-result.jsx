import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class GameResult extends PureComponent {

    render() {
        const { choice } = this.props;

        return (
            <div>
                <div>You chose {choice}</div>
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
