import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Homepage from '../pages/homepage';
import RockPaperScissorsChoice from '../pages/rock-paper-scissors-choice';
import GameResult from '../pages/game-result';

const routes = (
    <HashRouter>
        <div>
            <Route exact path="/" component={Homepage}/>
            <Route path="/rock-paper-scissors-choice" component={RockPaperScissorsChoice}/>
            <Route path="/game-result" component={GameResult}/>
        </div>
    </HashRouter>
);

export default routes;