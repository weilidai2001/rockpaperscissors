import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class GameResult extends PureComponent {

    render() {

        return (
            <div>
                <div>Display game result</div>
                <Link to="/">Play again</Link>
            </div>
        );
    }
}

export default GameResult;
