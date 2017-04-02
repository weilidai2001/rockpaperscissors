import { GameChoice } from '../constants/game-choices';

export default function GameLogic(state = {}, action) {
    switch (action.type) {
        case GameChoice.CHOICE_ROCK:
            return { choice: GameChoice.CHOICE_ROCK };
        case GameChoice.CHOICE_PAPER:
            return { choice: GameChoice.CHOICE_PAPER };
        case GameChoice.CHOICE_SCISSORS:
            return { choice: GameChoice.CHOICE_SCISSORS };

        default:
            return state;
    }
}