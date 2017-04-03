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
	const choices = Object.values(GameChoice);
	return choices[Math.floor(Math.random() * choices.length)];
}
