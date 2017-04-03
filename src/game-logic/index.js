import { GameRules } from '../constants/game-rules';
import { GameChoice } from '../constants/game-choices';
import { WinningStates } from '../constants/winning-states';

export function calculateWinner(player1Choice, player2Choice) {
	if (GameRules[player1Choice].wins.includes(player2Choice)) {
		return WinningStates.PLAYER1;
	} else if (GameRules[player1Choice].loses.includes(player2Choice)) {
		return WinningStates.PLAYER2;
	} else {
		return WinningStates.DRAW;
	}
}

export function getRandomChoice(){
    const randomNumberBetweenZeroAndOne = Math.random();
    if (randomNumberBetweenZeroAndOne <= 0.3333){
        return GameChoice.CHOICE_ROCK;
    } else if (randomNumberBetweenZeroAndOne > 0.3333 && randomNumberBetweenZeroAndOne <= 0.6666) {
        return GameChoice.CHOICE_PAPER;
    } else {
        return GameChoice.CHOICE_SCISSORS;
    }
}
