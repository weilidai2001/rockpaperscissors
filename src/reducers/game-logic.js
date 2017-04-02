import { GameChoice } from '../constants/game-choices';

export default function GameLogic(state = {}, action) {
    switch (action.type) {
        case GameChoice.CHOICE_ROCK.slug:
            return { choice: GameChoice.CHOICE_ROCK .slug};
        case GameChoice.CHOICE_PAPER.slug:
            return { choice: GameChoice.CHOICE_PAPER .slug};
        case GameChoice.CHOICE_SCISSORS.slug:
            return { choice: GameChoice.CHOICE_SCISSORS .slug};

        default:
            return state;
    }
}