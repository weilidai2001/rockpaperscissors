import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class RockPaperScissorsChoice extends PureComponent {

    render() {

        return (
            <div>
                <Link to="/game-result">Rock</Link>
                <Link to="/game-result">Paper</Link>
                <Link to="/game-result">Scissors</Link>
            </div>
        );
    }
}

export default RockPaperScissorsChoice;
