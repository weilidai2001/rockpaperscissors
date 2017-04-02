export default function GameLogic(state = {}, action) {
    switch (action.type) {
        case 'CHOICE_ROCK':
            return { choice: 'CHOICE_ROCK' };
        case 'CHOICE_PAPER':
            return { choice: 'CHOICE_PAPER' };
        case 'CHOICE_SCISSORS':
            return { choice: 'CHOICE_SCISSORS' };

        default:
            return state;
    }
}