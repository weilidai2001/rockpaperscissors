import { GameChoice } from '../constants/game-choices';
import { WinningStates } from '../constants/winning-states';

export function calculateWinner(player1Choice, player2Choice) {
    if (player1Choice === GameChoice.CHOICE_ROCK.slug) {
        if (player2Choice === GameChoice.CHOICE_PAPER.slug) {
            return WinningStates.PLAYER2;
        } else if (player2Choice === GameChoice.CHOICE_ROCK.slug) {
            return WinningStates.DRAW;
        } else {
            return WinningStates.PLAYER1;
        }
    } else if (player1Choice === GameChoice.CHOICE_PAPER.slug){
        if (player2Choice === GameChoice.CHOICE_SCISSORS.slug) {
            return WinningStates.PLAYER2;
        } else if (player2Choice === GameChoice.CHOICE_PAPER.slug) {
            return WinningStates.DRAW;
        } else {
            return WinningStates.PLAYER1;
        }
    } else if (player1Choice === GameChoice.CHOICE_SCISSORS.slug){
        if (player2Choice === GameChoice.CHOICE_ROCK.slug) {
            return WinningStates.PLAYER2;
        } else if (player2Choice === GameChoice.CHOICE_SCISSORS.slug) {
            return WinningStates.DRAW;
        } else {
            return WinningStates.PLAYER1;
        }
    }
}

export function getRandomChoice(){
    const randomNumberBetweenZeroAndOne = Math.random();
    if (randomNumberBetweenZeroAndOne <= 0.3333){
        return GameChoice.CHOICE_ROCK.slug;
    } else if (randomNumberBetweenZeroAndOne > 0.3333 && randomNumberBetweenZeroAndOne <= 0.6666) {
        return GameChoice.CHOICE_PAPER.slug;
    } else {
        return GameChoice.CHOICE_SCISSORS.slug;
    }
}