import { GameChoice } from '../constants/game-choices';
import { WinningStates } from '../constants/winning-states';

export function calculateWinner(player1Choice, player2Choice) {
    if (player1Choice === GameChoice.CHOICE_ROCK) {
        if (player2Choice === GameChoice.CHOICE_PAPER) {
            return WinningStates.PLAYER2;
        } else if (player2Choice === GameChoice.CHOICE_ROCK) {
            return WinningStates.DRAW;
        } else {
            return WinningStates.PLAYER1;
        }
    } else if (player1Choice === GameChoice.CHOICE_PAPER){
        if (player2Choice === GameChoice.CHOICE_SCISSORS) {
            return WinningStates.PLAYER2;
        } else if (player2Choice === GameChoice.CHOICE_PAPER) {
            return WinningStates.DRAW;
        } else {
            return WinningStates.PLAYER1;
        }
    } else if (player1Choice === GameChoice.CHOICE_SCISSORS){
        if (player2Choice === GameChoice.CHOICE_ROCK) {
            return WinningStates.PLAYER2;
        } else if (player2Choice === GameChoice.CHOICE_SCISSORS) {
            return WinningStates.DRAW;
        } else {
            return WinningStates.PLAYER1;
        }
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